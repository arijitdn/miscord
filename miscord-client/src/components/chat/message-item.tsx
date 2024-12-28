"use client";

import { Message } from "@/types/chat";
import { Avatar } from "@/components/ui/avatar";
import Image from "next/image";

interface MessageItemProps {
  message: Message;
}

export function MessageItem({ message }: MessageItemProps) {
  return (
    <div
      className={`flex ${
        message.sender === "user" ? "justify-end" : "justify-start"
      }`}
    >
      <div
        className={`flex items-start gap-2.5 max-w-[80%] ${
          message.sender === "user" ? "flex-row-reverse" : ""
        }`}
      >
        <Avatar
          className={`w-8 h-8 ${
            message.sender === "user" ? "bg-indigo-600" : "bg-zinc-700"
          }`}
        >
          <Image
            src="/miscord.png"
            alt="Miscord"
            height={1000}
            width={1000}
            className="w-full"
          />
        </Avatar>
        <div
          className={`p-3 rounded-lg ${
            message.sender === "user"
              ? "bg-indigo-600 text-white"
              : "bg-zinc-800 text-zinc-100"
          }`}
        >
          <p className="font-semibold mb-1">@{message.user.username}</p>
          <p className="text-sm">{message.text}</p>
          <p className="text-xs mt-1 opacity-70">
            {message.timestamp.toLocaleTimeString()}
          </p>
        </div>
      </div>
    </div>
  );
}
