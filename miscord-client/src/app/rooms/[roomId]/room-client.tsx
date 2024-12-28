"use client";

import { Card } from "@/components/ui/card";
import { MessageList } from "@/components/chat/message-list";
import { MessageInput } from "@/components/chat/message-input";
import { RoomHeader } from "@/components/rooms/room-header";
import { useChat } from "@/hooks/use-chat";

export default function RoomClient({
  roomId,
  roomName,
}: {
  roomId: string;
  roomName: string;
}) {
  const { messages, newMessage, setNewMessage, sendMessage, userCount } =
    useChat(roomId);

  return (
    <div className="flex h-screen bg-background">
      <div className="flex flex-col flex-1 max-w-4xl mx-auto p-4">
        <Card className="flex flex-col flex-1 shadow-xl border-zinc-800 bg-zinc-900">
          <RoomHeader
            roomName={roomName}
            roomId={roomId}
            userCount={userCount}
          />
          <MessageList messages={messages} />
          <MessageInput
            value={newMessage}
            onChange={setNewMessage}
            onSend={sendMessage}
          />
        </Card>
      </div>
    </div>
  );
}
