"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import createRoom from "@/actions/create-room";

interface CreateRoomDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function CreateRoomDialog({
  open,
  onOpenChange,
}: CreateRoomDialogProps) {
  const router = useRouter();
  const [roomName, setRoomName] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!roomName.trim()) return;

    const newRoom = await createRoom("Miscord", roomName);
    router.push(`/rooms/${newRoom.slug}`);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-zinc-900 border-zinc-800">
        <DialogHeader>
          <DialogTitle className="text-zinc-100">Create New Room</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            placeholder="Enter room name"
            value={roomName}
            onChange={(e) => setRoomName(e.target.value)}
            className="bg-zinc-800 border-zinc-700 text-zinc-100"
          />
          <Button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700"
          >
            Create Room
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
