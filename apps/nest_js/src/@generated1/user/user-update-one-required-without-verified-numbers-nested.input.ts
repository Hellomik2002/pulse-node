import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutVerifiedNumbersInput } from './user-create-without-verified-numbers.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutVerifiedNumbersInput } from './user-create-or-connect-without-verified-numbers.input';
import { UserUpsertWithoutVerifiedNumbersInput } from './user-upsert-without-verified-numbers.input';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithoutVerifiedNumbersInput } from './user-update-without-verified-numbers.input';

@InputType()
export class UserUpdateOneRequiredWithoutVerifiedNumbersNestedInput {

    @Field(() => UserCreateWithoutVerifiedNumbersInput, {nullable:true})
    @Type(() => UserCreateWithoutVerifiedNumbersInput)
    create?: UserCreateWithoutVerifiedNumbersInput;

    @Field(() => UserCreateOrConnectWithoutVerifiedNumbersInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutVerifiedNumbersInput)
    connectOrCreate?: UserCreateOrConnectWithoutVerifiedNumbersInput;

    @Field(() => UserUpsertWithoutVerifiedNumbersInput, {nullable:true})
    @Type(() => UserUpsertWithoutVerifiedNumbersInput)
    upsert?: UserUpsertWithoutVerifiedNumbersInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: UserWhereUniqueInput;

    @Field(() => UserUpdateWithoutVerifiedNumbersInput, {nullable:true})
    @Type(() => UserUpdateWithoutVerifiedNumbersInput)
    update?: UserUpdateWithoutVerifiedNumbersInput;
}
