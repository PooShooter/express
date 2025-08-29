/*
  Warnings:

  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "public"."User";

-- CreateTable
CREATE TABLE "public"."GPU" (
    "name" TEXT NOT NULL,
    "id" TEXT NOT NULL,
    "brand" TEXT NOT NULL,
    "chipset" TEXT NOT NULL,
    "vram" TEXT NOT NULL,
    "price" TEXT NOT NULL,
    "stock" TEXT NOT NULL,
    "rating" TEXT NOT NULL,
    "image" TEXT NOT NULL,

    CONSTRAINT "GPU_pkey" PRIMARY KEY ("id")
);
