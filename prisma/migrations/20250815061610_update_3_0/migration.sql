-- CreateTable
CREATE TABLE "public"."Game" (
    "name" TEXT NOT NULL,
    "id" TEXT NOT NULL,
    "price" TEXT NOT NULL,
    "rating" INTEGER NOT NULL,
    "image" TEXT NOT NULL,
    "developer" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "Game_pkey" PRIMARY KEY ("id")
);
