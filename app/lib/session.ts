"use server";

import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";
import { SessionPayload } from "./definitions";
import bcrypt from "bcryptjs";
import { createClient } from "@/utils/supbase/client";

const secretKey = process.env.SESSION_SECRET;
const encodedKey = new TextEncoder().encode(secretKey);

export async function encrypt(payload: SessionPayload) {
  return new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("7d")
    .sign(encodedKey);
}

export async function decrypt(session: string | undefined = "") {
  try {
    const { payload } = await jwtVerify(session, encodedKey, {
      algorithms: ["HS256"],
    });
    return payload;
  } catch (error) {
    console.log("Failed to verify session");
  }
}

export async function createSession(userId: string) {
  const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
  const session = await encrypt({ userId, expiresAt });
  const cookieStore = await cookies();

  cookieStore.set("session", session, {
    httpOnly: true,
    secure: true,
    expires: expiresAt,
    sameSite: "lax",
    path: "/",
  });
}

export async function signin(name: string, email: string, password: string) {
  const supabase = createClient();
  const { data, error } = await supabase
    .from("user-info")
    .select("id, username, password")
    .eq("email", email)
    .eq("username", name);

  if (error) {
    return {
      error: {
        message: error.message,
      },
    };
  }

  if (data == null || data.length == 0) {
    return {
      error: {
        message: "Username or email not found",
      },
    };
  }

  const user = data.find((user) => bcrypt.compareSync(password, user.password));
  if (!user) {
    return {
      error: {
        message: "Username or email not found",
      },
    };
  }

  return {
    user: {
      id: user.id.toString(),
      username: user.username,
    },
  };
}
