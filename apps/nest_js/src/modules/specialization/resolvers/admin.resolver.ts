// import { Specializations } from '@calcom/prisma_pulse';
import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { SpecializationCreateInput } from 'src/@generated/specialization/specialization-create.input';
import { Specialization } from 'src/@generated/specialization/specialization.model';

import { mainPrismaClient } from 'src/prisma/main_client';

@Resolver()
export class AdminResolver {
	@Mutation(() => Specialization)
	async creaeteSpec(
		@Args('data') data: SpecializationCreateInput,
	): Promise<Specialization> {
		const res = await mainPrismaClient.specialization.create({
			data: { ...data },
		});
		return res;
	}
}
