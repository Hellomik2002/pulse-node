import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";
import { HttpModule } from "@nestjs/axios";
import { CacheModule, Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloServerPluginLandingPageLocalDefault } from "apollo-server-core";
import { PrismaModule } from "nestjs-prisma";

import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { BookingResolver } from "./booking/booking.resolver";
import config from "./common/configs/config";
import { ConsultationListsModule } from "./consultationLists/consultationLists.module";
import { FilemanagerModule } from "./filemanager/filemanager.module";
import { AppointmentModule } from "./modules/appointment/appointment.module";
import { AuthModule } from "./modules/auth/auth.module";
import { BookingModule } from "./modules/booking/booking.module";
import { DoctorModule } from "./modules/doctors/doctor.module";
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
    BookingModule,
    FilemanagerModule,
    AppointmentModule,
  ],
  controllers: [AppController],
  providers: [AppService, BookingResolver],
})
export class AppModule {}
