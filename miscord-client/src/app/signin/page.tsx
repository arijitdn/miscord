"use client";

import { Card } from "@/components/ui/card";
import { signIn } from "next-auth/react";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { redirect } from "next/navigation";

export default function HomePage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const res = await signIn("credentials", {
      username,
      password,
    });

    if (!res?.error) {
      redirect("/");
    } else {
      if (res.status === 401) {
        alert("Invalid Credentials, try again!");
      } else if (res.status === 400) {
        alert("Missing Credentials!");
      } else if (res.status === 404) {
        alert("Account not found!");
      } else if (res.status === 403) {
        alert("Forbidden!");
      } else {
        alert("oops something went wrong..!");
      }
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-4">
      <Card className="w-full max-w-md space-y-6 p-6 shadow-xl border-zinc-800 bg-zinc-900">
        <div className="space-y-2 text-center">
          <div className="text-3xl font-bold text-zinc-100 flex justify-center items-center gap-2">
            <Image
              src="/icon.png"
              alt="Miscord"
              height={1000}
              width={1000}
              className="h-20 w-20"
            />
            <span>Miscord</span>
          </div>
          <p className="text-zinc-400">Sign in to your account</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label>Username</Label>
            <Input
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
              required
            />
          </div>
          <div>
            <Label>Password</Label>
            <Input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Password"
              required
            />
          </div>
          <Button className="w-full bg-indigo-600 hover:bg-indigo-700">
            Sign In
          </Button>
        </form>
      </Card>
    </div>
  );
}
