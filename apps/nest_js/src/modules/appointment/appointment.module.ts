import { Module } from "@nestjs/common";

import { GetConsultationResolver } from "./resolvers/get_appointment.resolver";

@Module({
  providers: [GetConsultationResolver],
})
export class AppointmentModule {}
