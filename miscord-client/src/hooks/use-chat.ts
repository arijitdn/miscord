"use client";

import { useState, useEffect } from "react";
import { Message } from "@/types/chat";

export function useChat(roomId: string) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState("");
  const [userCount, setUserCount] = useState(1);

  useEffect(() => {
    setMessages([
      {
        id: "1",
        text: `Welcome to room #${roomId}! 👋`,
        sender: "other",
        user: {
          id: "miscord",
          avatar: "/miscord.png",
          username: "miscord",
        },
        timestamp: new Date(),
      },
    ]);

    const interval = setInterval(() => {
      setUserCount((prev) =>
        Math.max(1, prev + Math.floor(Math.random() * 3) - 1)
      );
    }, 10000);

    return () => clearInterval(interval);
  }, [roomId]);

  const sendMessage = () => {
    if (!newMessage.trim()) return;

    const message: Message = {
      id: Date.now().toString(),
      text: newMessage,
      sender: "user",
      user: {
        id: "user",
        username: "user",
        avatar: "",
      },
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, message]);
    setNewMessage("");

    // Simulate response after 1 second
    setTimeout(() => {
      const response: Message = {
        id: (Date.now() + 1).toString(),
        text: "Thanks for your message! This is an automated response.",
        sender: "other",
        user: {
          id: "user2",
          username: "user2",
          avatar: "",
        },
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, response]);
    }, 1000);
  };

  return {
    messages,
    newMessage,
    setNewMessage,
    sendMessage,
    userCount,
  };
}
