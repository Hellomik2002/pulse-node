/*
  Warnings:

  - You are about to drop the column `bookingId` on the `Doctor` table. All the data in the column will be lost.
  - You are about to drop the column `bookingLink` on the `Doctor` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Doctor" DROP COLUMN "bookingId",
DROP COLUMN "bookingLink",
ADD COLUMN     "calLink" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "calUserId" INTEGER NOT NULL DEFAULT 0;
