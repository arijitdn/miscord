import prisma from "@/db";
import RoomClient from "./room-client";
import { RoomNotFound } from "@/components/rooms/room-not-found";
import { RoomLocked } from "@/components/rooms/room-locked";

export default async function RoomPage({
  params,
}: {
  params: { roomId: string };
}) {
  const roomId = await params.roomId;
  const roomData = await prisma.room.findFirst({
    where: {
      slug: roomId,
    },
  });

  if (!roomData) return <RoomNotFound roomId={roomId} />;
  if (roomData.private) return <RoomLocked roomId={roomId} />;

  return <RoomClient roomId={roomData.slug} roomName={roomData.name} />;
}
