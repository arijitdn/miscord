"use client";

import { Users } from "lucide-react";
import { Button } from "../ui/button";
import { redirect } from "next/navigation";

interface RoomHeaderProps {
  roomName: string;
  roomId: string;
  userCount: number;
}

export function RoomHeader({ roomName, roomId, userCount }: RoomHeaderProps) {
  return (
    <div className="p-4 border-b border-zinc-800">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-zinc-100">{roomName}</h1>
          <p className="text-sm text-zinc-400">Room ID: #{roomId}</p>
        </div>
        <div className="flex items-center gap-2 text-zinc-400">
          <Users className="h-4 w-4" />
          <span>{userCount} online</span>
        </div>
        <div>
          <Button
            onClick={() => {
              redirect("/");
            }}
            variant="destructive"
          >
            Leave
          </Button>
        </div>
      </div>
    </div>
  );
}
