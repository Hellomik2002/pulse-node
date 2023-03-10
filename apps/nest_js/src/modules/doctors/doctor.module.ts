import { Module } from "@nestjs/common";
import { PasswordService } from "src/auth/services/password.service";
import { CalComAccountManagerService } from "src/modules/cal-com/cal-com-account-manager/cal-com-account-manager.service";

import { AuthModule } from "../auth/auth.module";
import { AdminDoctor } from "./resolvers/admin.resolver";
import { DoctorResolver } from "./resolvers/doctor.resolver";
import { GetEventTypeResolver } from "./resolvers/get_event_type.resolver";
import { DoctorSeacrhService } from "./services/doctor_search.service";

@Module({
  imports: [AuthModule],
  providers: [
    DoctorSeacrhService,
    AdminDoctor,
    DoctorResolver,
    GetEventTypeResolver,
    CalComAccountManagerService,
    PasswordService,
  ],
})
export class DoctorModule {}
