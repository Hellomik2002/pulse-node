import { UseGuards } from "@nestjs/common";
import { Resolver, Query, Mutation, Args } from "@nestjs/graphql";
import { PulseUser } from "src/@generated/pulse-user/pulse-user.model";
import { GqlAuthGuard } from "src/modules/auth/tools/gql-auth.guard";
import { UserEntity } from "src/modules/auth/tools/user.decorator";

import { ChangePasswordInput } from "./dto/change-password.input";
import { UpdateUserInput } from "./dto/update-user.input";
import { UsersService } from "./users.service";

@Resolver(() => PulseUser)
@UseGuards(GqlAuthGuard)
export class UsersResolver {
  constructor(private usersService: UsersService) {}

  @Query(() => PulseUser)
  async me(@UserEntity() user: PulseUser): Promise<PulseUser> {
    return user;
  }

  @UseGuards(GqlAuthGuard)
  @Mutation(() => PulseUser)
  async updateUser(@UserEntity() user: PulseUser, @Args("data") newUserData: UpdateUserInput) {
    return this.usersService.updateUser(user.id, newUserData);
  }

  @UseGuards(GqlAuthGuard)
  @Mutation(() => PulseUser)
  async changePassword(@UserEntity() user: PulseUser, @Args("data") changePassword: ChangePasswordInput) {
    return this.usersService.changePassword(user.id, user.password, changePassword);
  }
}
