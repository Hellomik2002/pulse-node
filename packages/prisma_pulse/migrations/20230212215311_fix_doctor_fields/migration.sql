/*
  Warnings:

  - You are about to drop the column `email` on the `Doctor` table. All the data in the column will be lost.
  - You are about to drop the column `fullName` on the `Doctor` table. All the data in the column will be lost.
  - You are about to drop the column `password` on the `Doctor` table. All the data in the column will be lost.
  - You are about to drop the column `uniqueName` on the `Doctor` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "Doctor_email_key";

-- DropIndex
DROP INDEX "Doctor_uniqueName_key";

-- AlterTable
ALTER TABLE "Doctor" DROP COLUMN "email",
DROP COLUMN "fullName",
DROP COLUMN "password",
DROP COLUMN "uniqueName";
