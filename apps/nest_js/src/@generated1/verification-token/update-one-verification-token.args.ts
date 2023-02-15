import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { VerificationTokenUpdateInput } from './verification-token-update.input';
import { Type } from 'class-transformer';
import { VerificationTokenWhereUniqueInput } from './verification-token-where-unique.input';

@ArgsType()
export class UpdateOneVerificationTokenArgs {

    @Field(() => VerificationTokenUpdateInput, {nullable:false})
    @Type(() => VerificationTokenUpdateInput)
    data!: VerificationTokenUpdateInput;

    @Field(() => VerificationTokenWhereUniqueInput, {nullable:false})
    @Type(() => VerificationTokenWhereUniqueInput)
    where!: VerificationTokenWhereUniqueInput;
}
