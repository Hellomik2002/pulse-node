
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { PrismaService } from 'nestjs-prisma';
import { ConsulationListCreateInput } from 'src/@generated/consulation-list/consulation-list-create.input';
import { ConsulationList } from 'src/@generated/consulation-list/consulation-list.model';

import { mainPrismaClient } from 'src/prisma/main_client';

@Resolver()
export class ConsultationListResolver {
  // inject prisma service here
  private readonly prisma: PrismaService;

  @Query(() => ConsulationList)
  async getConsultationListById(@Args("consultationListId", { type: () => String}) consultationListId: string): Promise<ConsulationList> {
    return await mainPrismaClient.consulationList.findFirst({
      where: { id: consultationListId },

      include: {
        patient: true,
        author: true,
      }
    });
  }

  @Mutation(() => ConsulationList)
  async createConsultationList(
    @Args('create', { type: () => ConsulationListCreateInput })
    args: ConsulationListCreateInput,
  ): Promise<ConsulationList> {
    try {

      console.log('args', args)
      return mainPrismaClient.consulationList.create({ data: { ...args } });
    } catch (error) {
      console.log('error', error)
    }
  }
}
