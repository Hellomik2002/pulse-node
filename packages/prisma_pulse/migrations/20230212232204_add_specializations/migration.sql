-- CreateTable
CREATE TABLE "Specializations" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "doctorId" TEXT,

    CONSTRAINT "Specializations_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Specializations" ADD CONSTRAINT "Specializations_doctorId_fkey" FOREIGN KEY ("doctorId") REFERENCES "Doctor"("id") ON DELETE SET NULL ON UPDATE CASCADE;
