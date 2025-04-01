'use server';

import { cache } from "react";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { decrypt } from "@/app/lib/session";
import { createClient } from "@/utils/supbase/server";

export const verifySession = cache(async () => {
  const cookie = (await cookies()).get("session")?.value;
  const session = await decrypt(cookie);

  if (!session?.userId) {
    redirect("/log-in/username");
  }

  return { isAuth: true, userId: session.userId };
});

export const getUser = cache(async () => {
  const session = await verifySession();
  if (!session) return null;

  try {
    const supabase = await createClient();
    const user = await supabase
      .from("user-info")
      .select("id, username, email, created_at")
      .eq("id", session.userId)
      .single();
    if (!user) {
      console.log("User not found");
      return null;
    }

    console.log(user);
    return user;
  } catch (error) {
    console.log("Failed to fetch user", error);
    return null;
  }
});
