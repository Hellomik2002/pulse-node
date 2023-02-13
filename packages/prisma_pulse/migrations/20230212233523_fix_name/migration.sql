/*
  Warnings:

  - You are about to drop the `Specializations` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_DoctorToSpecializations` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_DoctorToSpecializations" DROP CONSTRAINT "_DoctorToSpecializations_A_fkey";

-- DropForeignKey
ALTER TABLE "_DoctorToSpecializations" DROP CONSTRAINT "_DoctorToSpecializations_B_fkey";

-- DropTable
DROP TABLE "Specializations";

-- DropTable
DROP TABLE "_DoctorToSpecializations";

-- CreateTable
CREATE TABLE "Specialization" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "Specialization_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_DoctorToSpecialization" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_DoctorToSpecialization_AB_unique" ON "_DoctorToSpecialization"("A", "B");

-- CreateIndex
CREATE INDEX "_DoctorToSpecialization_B_index" ON "_DoctorToSpecialization"("B");

-- AddForeignKey
ALTER TABLE "_DoctorToSpecialization" ADD CONSTRAINT "_DoctorToSpecialization_A_fkey" FOREIGN KEY ("A") REFERENCES "Doctor"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_DoctorToSpecialization" ADD CONSTRAINT "_DoctorToSpecialization_B_fkey" FOREIGN KEY ("B") REFERENCES "Specialization"("id") ON DELETE CASCADE ON UPDATE CASCADE;
