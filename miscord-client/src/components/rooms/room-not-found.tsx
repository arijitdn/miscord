"use client";

import Image from "next/image";
import { Card, CardFooter } from "../ui/card";
import { Button } from "../ui/button";
import { redirect } from "next/navigation";

export const RoomNotFound = ({ roomId }: { roomId: string }) => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-4">
      <Card className="w-full max-w-md space-y-6 p-6 shadow-xl border-zinc-800 bg-zinc-900">
        <div className="space-y-2 text-center">
          <div className="text-3xl font-bold text-zinc-100 flex justify-center items-center gap-2">
            <Image
              src="/icons/miscord-sad.png"
              alt="Miscord"
              height={1000}
              width={1000}
              className="h-20 w-20"
            />
            <span>Not Found</span>
          </div>
          <p className="text-zinc-400">
            No rooms found with ID{" "}
            <span className="font-semibold">#{roomId}</span>, please check again
          </p>
        </div>
        <CardFooter>
          <div className="flex justify-center w-full">
            <Button onClick={() => redirect("/")}>Go Back</Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};
