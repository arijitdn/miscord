"use client";

import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface MessageInputProps {
  value: string;
  onChange: (value: string) => void;
  onSend: () => void;
}

export function MessageInput({ value, onChange, onSend }: MessageInputProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSend();
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border-t border-zinc-800">
      <div className="flex gap-2">
        <Input
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Type your message..."
          className="flex-1 bg-zinc-800 border-zinc-700 text-zinc-100 placeholder:text-zinc-400"
        />
        <Button type="submit" className="bg-indigo-600 hover:bg-indigo-700">
          <Send className="h-4 w-4" />
        </Button>
      </div>
    </form>
  );
}
