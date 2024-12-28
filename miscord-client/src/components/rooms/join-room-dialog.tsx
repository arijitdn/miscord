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

interface JoinRoomDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function JoinRoomDialog({ open, onOpenChange }: JoinRoomDialogProps) {
  const router = useRouter();
  const [roomId, setRoomId] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!roomId.trim()) return;
    router.push(`/rooms/${roomId}`);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-zinc-900 border-zinc-800">
        <DialogHeader>
          <DialogTitle className="text-zinc-100">Join Room</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            placeholder="Enter room ID"
            value={roomId}
            onChange={(e) => setRoomId(e.target.value)}
            className="bg-zinc-800 border-zinc-700 text-zinc-100"
          />
          <Button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700"
          >
            Join Room
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}