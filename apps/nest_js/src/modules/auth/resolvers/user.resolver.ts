import { UseGuards } from '@nestjs/common';
import { Query, Resolver } from '@nestjs/graphql';
import { PulseUser } from 'src/@generated/pulse-user/pulse-user.model';
import { mainPrismaClient } from 'src/prisma/main_client';
import { GqlAuthGuard } from '../tools/gql-auth.guard';
import { UserEntity } from '../tools/user.decorator';

@Resolver()
export class UserResolver {
	@Query(() => PulseUser)
	@UseGuards(GqlAuthGuard)
	getUser(@UserEntity() { id: userId }: PulseUser) {
		return mainPrismaClient.pulseUser.findUnique({
			where: {
				id: userId,
			},
		});
	}
}
