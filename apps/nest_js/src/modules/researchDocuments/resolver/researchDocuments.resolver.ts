import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { PrismaService } from 'nestjs-prisma';
import { ConsulationListCreateInput } from 'src/@generated/consulation-list/consulation-list-create.input';
import { ConsulationList } from 'src/@generated/consulation-list/consulation-list.model';
import { ResearchDocumentCreateInput } from 'src/@generated/research-document/research-document-create.input';
import { ResearchDocument } from 'src/@generated/research-document/research-document.model';
import { mainPrismaClient } from 'src/prisma/main_client';


@Resolver()
export class ResearchDocumentsResolver {
  // inject prisma service here
  private readonly prisma: PrismaService;

  @Query(() => ResearchDocument)
  async getResearchDocumentById(@Args("researchDocumentId", { type: () => String}) researchDocumentId: string): Promise<ResearchDocument> {
    return await mainPrismaClient.researchDocument.findFirst({
      where: { id: researchDocumentId },

      include: {
        patient: true,
        author: true,
      }
    });
  }

  @Mutation(() => ResearchDocument)
  async createResearchDocument(
    @Args('create', { type: () => ResearchDocumentCreateInput })
    args: ResearchDocumentCreateInput,
  ): Promise<ResearchDocument> {
    try {

      console.log('args', args)
      return mainPrismaClient.researchDocument.create({ data: { ...args } });
    } catch (error) {
      console.log('error', error)
    }
  }

  // edit consultation list by id here
  @Mutation(() => ResearchDocument)
  async editResearchDocument(
    @Args('researchDocumentId', { type: () => String })
    researchDocumentId: string,
    @Args('edit', { type: () => ResearchDocumentCreateInput })
    args: ResearchDocumentCreateInput,
  ): Promise<ResearchDocument> {
    return mainPrismaClient.researchDocument.update({
      where: { id: researchDocumentId },
      data: { ...args },
    });
  }
}

// create ResearchDocumentsResolver here with same operations but different name
