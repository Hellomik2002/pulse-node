import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";
import { HttpModule } from "@nestjs/axios";
import { CacheModule, Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloServerPluginLandingPageLocalDefault } from "apollo-server-core";
import { PrismaModule } from "nestjs-prisma";
import { ResearchDocumentsModule } from "src/modules/researchDocuments/researchDocuments.module";

import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import config from "./common/configs/config";
import { AppointmentModule } from "./modules/appointment/appointment.module";
import { AuthModule } from "./modules/auth/auth.module";
import { BookingModule } from "./modules/booking/booking.module";
import { ConsultationListsModule } from "./modules/consultationLists/consultationLists.module";
import { DoctorModule } from "./modules/doctors/doctor.module";
import { FilemanagerModule } from "./modules/filemanager/filemanager.module";
import { PharmacyModule } from "./modules/pharmacy/pharmacy.module";
import { SpecializatonModule } from "./modules/specialization/specialization.module";
import { UserModule } from "./users/users.module";

@Module({
  imports: [
    { ...HttpModule.register({}), global: true },
    { ...CacheModule.register(), global: true },
    ConfigModule.forRoot({
      isGlobal: true,
      load: [config],
    }),
    PrismaModule.forRoot({
      isGlobal: true,
    }),
    // MongooseModule.forRoot(process.env.DATABASE_URL, {
    // 	dbName: process.env.DATABASE_NAME,
    // }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      debug: true,
      playground: false,
      autoSchemaFile: true,
      sortSchema: true,
      plugins: [ApolloServerPluginLandingPageLocalDefault()],
    }),
    AuthModule,
    UserModule,
    ConsultationListsModule,
    DoctorModule,
    SpecializatonModule,

    ResearchDocumentsModule,
    BookingModule,
    FilemanagerModule,

    BookingModule,
    FilemanagerModule,
    AppointmentModule,
    PharmacyModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
