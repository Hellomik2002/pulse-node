import { UseGuards } from '@nestjs/common';
import { Args, Int, Query, Resolver } from '@nestjs/graphql';
import { PulseUser } from 'src/@generated/pulse-user/pulse-user.model';
import { mainPrismaClient } from 'src/prisma/main_client';
import { GqlAuthGuard } from '../tools/gql-auth.guard';
import { UserEntity } from '../tools/user.decorator';

@Resolver()
export class UserResolver { 
  // get user by id query
  @Query(() => PulseUser)
  getUserById(@Args('id',  { type: () => String }) id: string) {
    return mainPrismaClient.pulseUser.findUnique({
      where: {
        id
      },
      include:{
        appointmentsAsPatient: {
          include: {
            author: true,
          }
        }
      }
    });
  }


  @Query(() => PulseUser)
	@UseGuards(GqlAuthGuard)
	getUser(@UserEntity() { id: userId }: PulseUser) {
		return mainPrismaClient.pulseUser.findUnique({
			where: {
				id: userId,
			},
		});
	}

  // get all users query

  @Query(() => [PulseUser])
  getAllUsers() {
    return mainPrismaClient.pulseUser.findMany({
      where: {
        role: 'USER',
      }
    });
  }
}
