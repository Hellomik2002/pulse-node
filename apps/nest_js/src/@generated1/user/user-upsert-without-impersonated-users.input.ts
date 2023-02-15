import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutImpersonatedUsersInput } from './user-update-without-impersonated-users.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutImpersonatedUsersInput } from './user-create-without-impersonated-users.input';

@InputType()
export class UserUpsertWithoutImpersonatedUsersInput {

    @Field(() => UserUpdateWithoutImpersonatedUsersInput, {nullable:false})
    @Type(() => UserUpdateWithoutImpersonatedUsersInput)
    update!: UserUpdateWithoutImpersonatedUsersInput;

    @Field(() => UserCreateWithoutImpersonatedUsersInput, {nullable:false})
    @Type(() => UserCreateWithoutImpersonatedUsersInput)
    create!: UserCreateWithoutImpersonatedUsersInput;
}
