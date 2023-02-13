import { Module } from '@nestjs/common';
import { AdminResolver } from './resolvers/admin.resolver';

@Module({
	providers: [AdminResolver],
})
export class SpecializatonModule {}
