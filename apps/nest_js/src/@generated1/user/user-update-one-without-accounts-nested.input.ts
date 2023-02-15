import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutAccountsInput } from './user-create-without-accounts.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutAccountsInput } from './user-create-or-connect-without-accounts.input';
import { UserUpsertWithoutAccountsInput } from './user-upsert-without-accounts.input';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithoutAccountsInput } from './user-update-without-accounts.input';

@InputType()
export class UserUpdateOneWithoutAccountsNestedInput {

    @Field(() => UserCreateWithoutAccountsInput, {nullable:true})
    @Type(() => UserCreateWithoutAccountsInput)
    create?: UserCreateWithoutAccountsInput;

    @Field(() => UserCreateOrConnectWithoutAccountsInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutAccountsInput)
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput;

    @Field(() => UserUpsertWithoutAccountsInput, {nullable:true})
    @Type(() => UserUpsertWithoutAccountsInput)
    upsert?: UserUpsertWithoutAccountsInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: UserWhereUniqueInput;

    @Field(() => UserUpdateWithoutAccountsInput, {nullable:true})
    @Type(() => UserUpdateWithoutAccountsInput)
    update?: UserUpdateWithoutAccountsInput;
}
