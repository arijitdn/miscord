"use server";

import prisma from "@/db";
import { v4 as uuidv4 } from "uuid";

export default async function createRoom(owner: string, name: string) {
  const slug = uuidv4().replace(/-/g, "").slice(0, 6);

  const newRoom = await prisma.room.create({
    data: {
      name,
      slug,
      owner,
    },
  });

  return newRoom;
}
