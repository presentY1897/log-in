"use client";

import AnimatePlaceholderInput from "@/components/atoms/animate-placeholder-input";
import { useState } from "react";

export default function Home() {
  const [username, setUsername] = useState("");
  const usernameChanged = (value: string) => setUsername(value);
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div className="flex flex-col gap-2 row-start-2 items-center sm:items-start">
        <AnimatePlaceholderInput
          type="email"
          placeholder="Username or email"
          value={username}
          inputValueChange={usernameChanged}
        />
        <button className="bg-blue-500 text-white rounded-md p-2">
          Log In
        </button>
      </div>
    </div>
  );
}
