import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutVerifiedNumbersInput } from './user-update-without-verified-numbers.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutVerifiedNumbersInput } from './user-create-without-verified-numbers.input';

@InputType()
export class UserUpsertWithoutVerifiedNumbersInput {

    @Field(() => UserUpdateWithoutVerifiedNumbersInput, {nullable:false})
    @Type(() => UserUpdateWithoutVerifiedNumbersInput)
    update!: UserUpdateWithoutVerifiedNumbersInput;

    @Field(() => UserCreateWithoutVerifiedNumbersInput, {nullable:false})
    @Type(() => UserCreateWithoutVerifiedNumbersInput)
    create!: UserCreateWithoutVerifiedNumbersInput;
}
