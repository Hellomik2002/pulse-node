import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutImpersonatedUsersInput } from './user-create-without-impersonated-users.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutImpersonatedUsersInput } from './user-create-or-connect-without-impersonated-users.input';
import { UserUpsertWithoutImpersonatedUsersInput } from './user-upsert-without-impersonated-users.input';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithoutImpersonatedUsersInput } from './user-update-without-impersonated-users.input';

@InputType()
export class UserUpdateOneRequiredWithoutImpersonatedUsersNestedInput {

    @Field(() => UserCreateWithoutImpersonatedUsersInput, {nullable:true})
    @Type(() => UserCreateWithoutImpersonatedUsersInput)
    create?: UserCreateWithoutImpersonatedUsersInput;

    @Field(() => UserCreateOrConnectWithoutImpersonatedUsersInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutImpersonatedUsersInput)
    connectOrCreate?: UserCreateOrConnectWithoutImpersonatedUsersInput;

    @Field(() => UserUpsertWithoutImpersonatedUsersInput, {nullable:true})
    @Type(() => UserUpsertWithoutImpersonatedUsersInput)
    upsert?: UserUpsertWithoutImpersonatedUsersInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: UserWhereUniqueInput;

    @Field(() => UserUpdateWithoutImpersonatedUsersInput, {nullable:true})
    @Type(() => UserUpdateWithoutImpersonatedUsersInput)
    update?: UserUpdateWithoutImpersonatedUsersInput;
}
