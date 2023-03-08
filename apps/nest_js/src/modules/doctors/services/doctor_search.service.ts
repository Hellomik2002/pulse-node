import { typesnceClient } from "src/modules/pharmacy/pharmacy.module";
import { mainPrismaClient } from "src/prisma/main_client";

import { Doctor } from "@calcom/prisma_pulse";

export class DoctorSeacrhService {
  constructor() {
    this.init();
  }
  async init() {
    const doctors = await mainPrismaClient.doctor.findMany();
    await typesnceClient.collections("doctors").documents().import(doctors, {
      action: "upsert",
    });
  }

  async upsertDoctor(doctor: Doctor) {
    await typesnceClient.collections("doctors").documents().upsert(doctor);
  }
  async removeDoctor(doctorId: string) {
    await typesnceClient.collections("doctors").documents("doctorid").delete();
  }
}
