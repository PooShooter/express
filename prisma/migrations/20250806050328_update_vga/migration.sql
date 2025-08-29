/*
  Warnings:

  - You are about to drop the column `email` on the `User` table. All the data in the column will be lost.
  - Added the required column `brand` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `chipset` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `image` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `price` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `rating` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `stock` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `vram` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."User" DROP COLUMN "email",
ADD COLUMN     "brand" TEXT NOT NULL,
ADD COLUMN     "chipset" TEXT NOT NULL,
ADD COLUMN     "image" TEXT NOT NULL,
ADD COLUMN     "price" TEXT NOT NULL,
ADD COLUMN     "rating" TEXT NOT NULL,
ADD COLUMN     "stock" TEXT NOT NULL,
ADD COLUMN     "vram" TEXT NOT NULL;
