import { Module } from '@nestjs/common';
import { ConsultationListResolver } from './resolver/consultationLists.resolver';

@Module({ providers: [ConsultationListResolver] })
export class ConsultationListsModule {}
