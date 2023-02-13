/*
  Warnings:

  - You are about to drop the column `doctorId` on the `Specializations` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Specializations" DROP CONSTRAINT "Specializations_doctorId_fkey";

-- AlterTable
ALTER TABLE "Specializations" DROP COLUMN "doctorId";

-- CreateTable
CREATE TABLE "_DoctorToSpecializations" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_DoctorToSpecializations_AB_unique" ON "_DoctorToSpecializations"("A", "B");

-- CreateIndex
CREATE INDEX "_DoctorToSpecializations_B_index" ON "_DoctorToSpecializations"("B");

-- AddForeignKey
ALTER TABLE "_DoctorToSpecializations" ADD CONSTRAINT "_DoctorToSpecializations_A_fkey" FOREIGN KEY ("A") REFERENCES "Doctor"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_DoctorToSpecializations" ADD CONSTRAINT "_DoctorToSpecializations_B_fkey" FOREIGN KEY ("B") REFERENCES "Specializations"("id") ON DELETE CASCADE ON UPDATE CASCADE;
