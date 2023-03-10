import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { Clinic } from "src/@generated/clinic/clinic.model";
import { DoctorCreateInput } from "src/@generated/doctor/doctor-create.input";
import { DoctorUpdateInput } from "src/@generated/doctor/doctor-update.input";
import { Doctor } from "src/@generated/doctor/doctor.model";
import { PasswordService } from "src/modules/auth/services/password.service";
import { CalComAccountManagerService } from "src/modules/cal-com/cal-com-account-manager/cal-com-account-manager.service";
import { CalComAccountSignUpDto } from "src/modules/cal-com/cal-com-account-manager/dto/createCalAccountDto";
import { mainPrismaClient } from "src/prisma/main_client";

import { DoctorSeacrhService } from "../services/doctor_search.service";

@Resolver()
export class AdminDoctor {
  constructor(
    private readonly passwordService: PasswordService,
    private readonly calcomAccountManagerService: CalComAccountManagerService,
    private readonly doctorSeacrhService: DoctorSeacrhService
  ) {}

  @Mutation(() => Doctor)
  async createDoctor(@Args("doctor") doctor: DoctorCreateInput): Promise<Doctor> {
    const hashedPassword = await this.passwordService.hashPassword(
      doctor.user.create.password,
    );


    const newDoctor = await mainPrismaClient.doctor.create({
      data: {
        ...doctor,
        user: {
          create: {
            ...doctor.user.create,
            password: hashedPassword,
            role: 'DOCTOR',
          }
        },
      }
    });
    // find user by user id from doctor;
    const user = await mainPrismaClient.pulseUser.findUnique({
      where: { id: newDoctor.userId },
    });

    const calcomAccountCreationDto: CalComAccountSignUpDto = {
      email: user.email,
      username: user.uniqueName,
      password: doctor.user.create.password,
    };
    try {
      const res = await this.calcomAccountManagerService.createCalAccount(calcomAccountCreationDto);
      const calUser = res.data.user;

      mainPrismaClient.doctor.update({
        where: { id: newDoctor.id },
        data: {
          calUserId: calUser.id,
        },
      });
    } catch (e) {
      console.log(e);
    }
    this.doctorSeacrhService.upsertDoctor(newDoctor);
    // const newDoctor = await mainPrismaClient.doctor.update({where: {id: newDoctor.id}, data: {calcomAccountId: res.id}}});
    return newDoctor;
  }

  // update doctor mutation
  @Mutation(() => Doctor)
  async updateDoctor(
    @Args("doctorId") doctorId: string,
    @Args("newDoctor") newDoctor: DoctorUpdateInput
  ): Promise<Doctor> {
    const newDoctorRes = await mainPrismaClient.doctor.update({
      where: { id: doctorId },
      data: {
        ...newDoctor,
      },
    });
    this.doctorSeacrhService.upsertDoctor(newDoctorRes);

    return newDoctorRes;
  }

  @Mutation(() => Doctor)
  async deleteDoctor(@Args("doctorId") doctorId: string): Promise<Doctor> {
    const deletedDoctor = await mainPrismaClient.doctor.delete({
      where: { id: doctorId },
    });
    this.doctorSeacrhService.removeDoctor(doctorId);
    return deletedDoctor;
  }

  // get all doctors
  @Query(() => [Doctor])
  async getAllDoctors(): Promise<Doctor[]> {
    const doctors = await mainPrismaClient.doctor.findMany();
    return doctors;
  }

  // )
  // get doctor by id
  @Query(() => Doctor)
  async getDoctorById(@Args("doctorId") doctorId: string): Promise<Doctor> {
    const doctor = await mainPrismaClient.doctor.findUnique({
      where: { id: doctorId },
      include: {
        user: true,
        specializations: {
          include: { Doctor: false },
        },

        clinic: true
      },
    });
    return doctor;
  }

  @Query(() => [Clinic])
  async getClinics(): Promise<Clinic[]> {
    const clinics = await mainPrismaClient.clinic.findMany({
      include: {
        doctors: {
          include: {
            user: true,
            clinic: true,
            specializations: true,
          }
        }
      }
    });
    return clinics;
  }

  @Query(() => Clinic)
  async getClinicById(@Args("clinicId") clinicId: string): Promise<Clinic> {
    const clinic = await mainPrismaClient.clinic.findUnique({
      where: { id: clinicId },
      include: {
        doctors: {
          include: {
            user: true,
            clinic: true,
            specializations: true,
          }
        }
      }
    });
    return clinic;
  }
}
