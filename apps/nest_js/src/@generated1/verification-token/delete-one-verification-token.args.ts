import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { VerificationTokenWhereUniqueInput } from './verification-token-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOneVerificationTokenArgs {

    @Field(() => VerificationTokenWhereUniqueInput, {nullable:false})
    @Type(() => VerificationTokenWhereUniqueInput)
    where!: VerificationTokenWhereUniqueInput;
}
