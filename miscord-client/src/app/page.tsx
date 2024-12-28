"use client";

import { PlusCircle, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CreateRoomDialog } from "@/components/rooms/create-room-dialog";
import { JoinRoomDialog } from "@/components/rooms/join-room-dialog";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function HomePage() {
  const [isCreateOpen, setIsCreateOpen] = useState(false);
  const [isJoinOpen, setIsJoinOpen] = useState(false);

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
          <p className="text-zinc-400">
            Create or join a chat room to get started
          </p>
        </div>

        <div className="space-y-4">
          <Button
            onClick={() => setIsCreateOpen(true)}
            className="w-full bg-indigo-600 hover:bg-indigo-700"
          >
            <PlusCircle className="mr-2 h-4 w-4" />
            Create New Room
          </Button>

          <Button
            onClick={() => setIsJoinOpen(true)}
            variant="outline"
            className="w-full border-zinc-700 hover:bg-zinc-800"
          >
            <Users className="mr-2 h-4 w-4" />
            Join Room
          </Button>
        </div>

        <CreateRoomDialog open={isCreateOpen} onOpenChange={setIsCreateOpen} />
        <JoinRoomDialog open={isJoinOpen} onOpenChange={setIsJoinOpen} />
      </Card>
    </div>
  );
}
