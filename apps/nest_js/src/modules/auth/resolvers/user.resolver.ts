import { UseGuards } from '@nestjs/common';
import { Query, Resolver } from '@nestjs/graphql';
import { User } from 'src/@generated/user/user.model';
import { mainPrismaClient } from 'src/prisma/main_client';
import { GqlAuthGuard } from '../tools/gql-auth.guard';
import { UserEntity } from '../tools/user.decorator';

@Resolver()
export class UserResolver {
	@Query(() => User)
	@UseGuards(GqlAuthGuard)
	getUser(@UserEntity() { id: userId }: User) {
		return mainPrismaClient.user.findUnique({
			where: {
				id: userId,
			},
		});
	}
}
