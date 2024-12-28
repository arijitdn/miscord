-- CreateTable
CREATE TABLE "Room" (
    "id" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "owner" TEXT NOT NULL,
    "locked" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Room_pkey" PRIMARY KEY ("id")
);
