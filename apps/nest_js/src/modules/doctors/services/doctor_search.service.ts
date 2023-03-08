import { flatObj } from "src/common/utils/flat_object";
import { typesnceClient } from "src/modules/pharmacy/pharmacy.module";
import { mainPrismaClient } from "src/prisma/main_client";

import { Doctor } from "@calcom/prisma_pulse";

export class DoctorSeacrhService {
  constructor() {
    this.init();
  }
  async init() {
    await typesnceClient.collections("doctors").documents().delete({
      filter_by: "user_fullName:='Doctor' || user_fullName:!='Doctor'",
    });

    const doctors = await mainPrismaClient.doctor.findMany({
      include: {
        user: true,
      },
    });

    await typesnceClient
      .collections("doctors")
      .documents()
      .import(
        doctors.map((val) => ({ ...flatObj(val), ...val })),
        {
          action: "upsert",
        }
      );
  }

  async upsertDoctor(doctor: Doctor) {
    await typesnceClient
      .collections("doctors")
      .documents()
      .upsert({ ...flatObj(doctor), ...doctor });
  }
  async removeDoctor(doctorId: string) {
    await typesnceClient.collections("doctors").documents(doctorId).delete();
  }
}
