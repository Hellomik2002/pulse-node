import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutVerifiedNumbersInput } from '../user/user-create-nested-one-without-verified-numbers.input';

@InputType()
export class VerifiedNumberCreateInput {

    @Field(() => UserCreateNestedOneWithoutVerifiedNumbersInput, {nullable:false})
    user!: UserCreateNestedOneWithoutVerifiedNumbersInput;

    @Field(() => String, {nullable:false})
    phoneNumber!: string;
}
