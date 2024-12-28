"use client";

import { Message } from "@/types/chat";
import { ScrollArea } from "@/components/ui/scroll-area";
import { MessageItem } from "./message-item";

interface MessageListProps {
  messages: Message[];
}

export function MessageList({ messages }: MessageListProps) {
  return (
    <ScrollArea className="flex-1 p-4">
      <div className="space-y-4">
        {messages.map((message) => (
          <MessageItem key={message.id} message={message} />
        ))}
      </div>
    </ScrollArea>
  );
}
