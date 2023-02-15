import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutVerifiedNumbersInput } from './user-create-without-verified-numbers.input';

@InputType()
export class UserCreateOrConnectWithoutVerifiedNumbersInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: UserWhereUniqueInput;

    @Field(() => UserCreateWithoutVerifiedNumbersInput, {nullable:false})
    @Type(() => UserCreateWithoutVerifiedNumbersInput)
    create!: UserCreateWithoutVerifiedNumbersInput;
}
