import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutImpersonatedUsersInput } from './user-create-without-impersonated-users.input';

@InputType()
export class UserCreateOrConnectWithoutImpersonatedUsersInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: UserWhereUniqueInput;

    @Field(() => UserCreateWithoutImpersonatedUsersInput, {nullable:false})
    @Type(() => UserCreateWithoutImpersonatedUsersInput)
    create!: UserCreateWithoutImpersonatedUsersInput;
}
