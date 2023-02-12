// import { Args, Mutation, Resolver } from '@nestjs/graphql';
// import { PrismaService } from 'nestjs-prisma';
// import { AppointmentAggregateArgs } from '@calcom/prisma_pulse/@generated/appointment/appointment-aggregate.args';
// import { AppointmentCreateWithoutPatientInput } from '@calcom/prisma_pulse/@generated/appointment/appointment-create-without-patient.input';
// import { AppointmentCreateInput } from '@calcom/prisma_pulse/@generated/appointment/appointment-create.input';
// import { Appointment } from '@calcom/prisma_pulse/@generated/appointment/appointment.model';

// @Resolver()
// export class TestAppointment {
//   private readonly prisma: PrismaService;

//   constructor(prisma: PrismaService) {
//     this.prisma = prisma;
//   }

//   @Mutation(() => Appointment)
//   async checkCreate(
//     @Args('args') args: AppointmentCreateInput,
//   ): Promise<Appointment> {
//     AppointmentCreateWithoutPatientInput
//     return this.prisma.appointment.create({
//       data: { ...args },
//     });
//   }
// }
