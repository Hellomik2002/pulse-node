import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutImpersonatedUsersInput } from './user-create-without-impersonated-users.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutImpersonatedUsersInput } from './user-create-or-connect-without-impersonated-users.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutImpersonatedUsersInput {

    @Field(() => UserCreateWithoutImpersonatedUsersInput, {nullable:true})
    @Type(() => UserCreateWithoutImpersonatedUsersInput)
    create?: UserCreateWithoutImpersonatedUsersInput;

    @Field(() => UserCreateOrConnectWithoutImpersonatedUsersInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutImpersonatedUsersInput)
    connectOrCreate?: UserCreateOrConnectWithoutImpersonatedUsersInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: UserWhereUniqueInput;
}
