import { Module } from '@nestjs/common';



import { ResearchDocumentsResolver } from './resolver/researchDocuments.resolver';


@Module({ providers: [ResearchDocumentsResolver] })
export class ResearchDocumentsModule {}
