import { Args, Query, Resolver } from '@nestjs/graphql';
import { PrismaService } from 'nestjs-prisma';
import { FileEntity } from 'src/@generated/file-entity/file-entity.model';
import { mainPrismaClient } from 'src/prisma/main_client';

@Resolver()
export class FilemanagerResolver {
  @Query(() => [FileEntity])
  async getFilesByPatientId(@Args('patientId', { type: () => String }) patientId: string) {
    return await mainPrismaClient.fileEntity.findRaw({
      filter: {
        metadata: {
          patientId: { $eq: patientId }
        }
      }
    });
  }
}
