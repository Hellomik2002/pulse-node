import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutVerifiedNumbersInput } from './user-create-without-verified-numbers.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutVerifiedNumbersInput } from './user-create-or-connect-without-verified-numbers.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutVerifiedNumbersInput {

    @Field(() => UserCreateWithoutVerifiedNumbersInput, {nullable:true})
    @Type(() => UserCreateWithoutVerifiedNumbersInput)
    create?: UserCreateWithoutVerifiedNumbersInput;

    @Field(() => UserCreateOrConnectWithoutVerifiedNumbersInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutVerifiedNumbersInput)
    connectOrCreate?: UserCreateOrConnectWithoutVerifiedNumbersInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: UserWhereUniqueInput;
}
