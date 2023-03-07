import { UseGuards } from "@nestjs/common";
import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { PrismaService } from "nestjs-prisma";
import { ConsulationListCreateInput } from "src/@generated/consulation-list/consulation-list-create.input";
import { ConsulationList } from "src/@generated/consulation-list/consulation-list.model";
import { ResearchDocumentCreateInput } from "src/@generated/research-document/research-document-create.input";
import { ResearchDocument } from "src/@generated/research-document/research-document.model";
import { UserEntity } from "src/auth/tools/user.decorator";
import { GqlAuthGuard } from "src/modules/auth/tools/gql-auth.guard";
import { mainPrismaClient } from "src/prisma/main_client";

import { PulseUser } from "@calcom/prisma_pulse";

@Resolver()
export class MyResearchDocumentsResolver {
  @Query(() => [ResearchDocument])
  @UseGuards(GqlAuthGuard)
  async getMyResearchDocument(@UserEntity() { id: userId }: PulseUser): Promise<ResearchDocument[]> {
    return await mainPrismaClient.researchDocument.findMany({
      where: { patientId: userId },
      include: {
        patient: true,
        author: true,
      },
    });
  }
}

// create ResearchDocumentsResolver here with same operations but different name
