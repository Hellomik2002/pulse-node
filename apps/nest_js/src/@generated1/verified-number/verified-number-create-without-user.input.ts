import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class VerifiedNumberCreateWithoutUserInput {

    @Field(() => String, {nullable:false})
    phoneNumber!: string;
}
