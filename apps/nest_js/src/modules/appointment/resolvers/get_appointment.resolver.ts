import { UseGuards } from "@nestjs/common";
import { Query, Resolver } from "@nestjs/graphql";
import { ConsulationList } from "src/@generated/consulation-list/consulation-list.model";
import { PulseUser } from "src/@generated/pulse-user/pulse-user.model";
import { UserEntity } from "src/auth/tools/user.decorator";
import { GqlAuthGuard } from "src/modules/auth/tools/gql-auth.guard";
import { mainPrismaClient } from "src/prisma/main_client";

@Resolver()
export class GetConsultationResolver {
  @Query(() => [ConsulationList])
  @UseGuards(GqlAuthGuard)
  async getMyAppointment(@UserEntity() { id: userId }: PulseUser): Promise<ConsulationList[]> {
    return mainPrismaClient.consulationList.findMany({
      where: {
        patientId: userId,
      },
      include: {
        author: true,
      },
    });
  }
}
