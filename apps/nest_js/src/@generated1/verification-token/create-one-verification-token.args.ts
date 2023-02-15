import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { VerificationTokenCreateInput } from './verification-token-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneVerificationTokenArgs {

    @Field(() => VerificationTokenCreateInput, {nullable:false})
    @Type(() => VerificationTokenCreateInput)
    data!: VerificationTokenCreateInput;
}
