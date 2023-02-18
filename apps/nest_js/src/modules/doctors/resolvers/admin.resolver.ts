import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { DoctorCreateInput } from 'src/@generated/doctor/doctor-create.input';
import { Doctor } from 'src/@generated/doctor/doctor.model';
import { CalComAccountManagerService } from 'src/cal-com/cal-com-account-manager/cal-com-account-manager.service';
import { CalComAccountSignUpDto } from 'src/cal-com/cal-com-account-manager/dto/createCalAccountDto';
import { PasswordService } from 'src/modules/auth/services/password.service';
import { mainPrismaClient } from 'src/prisma/main_client';

@Resolver()
export class AdminDoctor {
  constructor(
    private readonly passwordService: PasswordService,
    private readonly calcomAccountManagerService: CalComAccountManagerService,
  ) { }

  @Mutation(() => Doctor)
  async createDoctor(
    @Args('doctor') doctor: DoctorCreateInput,
  ): Promise<Doctor> {
    const newDoctor = await mainPrismaClient.doctor.create({
      data: {
        ...doctor,
      },
    });
    // find user by user id from doctor;
    const user = await mainPrismaClient.user.findUnique({
      where: { id: newDoctor.userId },
    });

    const calcomAccountCreationDto: CalComAccountSignUpDto = {
      email: user.email,
      username: user.uniqueName,
      password: doctor.user.create.password,
    };
    try {
      const res = await this.calcomAccountManagerService.createCalAccount(
        calcomAccountCreationDto,
      );
      const calUser = res.data.user;

      mainPrismaClient.doctor.update({
        where: { id: newDoctor.id },
        data: {
          calUserId: calUser.id,
        }
      });
    } catch (e) {
      console.log(e);
    }
    // const newDoctor = await mainPrismaClient.doctor.update({where: {id: newDoctor.id}, data: {calcomAccountId: res.id}}});
    return newDoctor;
  }
}
