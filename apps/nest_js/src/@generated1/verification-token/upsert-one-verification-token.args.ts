import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { VerificationTokenWhereUniqueInput } from './verification-token-where-unique.input';
import { Type } from 'class-transformer';
import { VerificationTokenCreateInput } from './verification-token-create.input';
import { VerificationTokenUpdateInput } from './verification-token-update.input';

@ArgsType()
export class UpsertOneVerificationTokenArgs {

    @Field(() => VerificationTokenWhereUniqueInput, {nullable:false})
    @Type(() => VerificationTokenWhereUniqueInput)
    where!: VerificationTokenWhereUniqueInput;

    @Field(() => VerificationTokenCreateInput, {nullable:false})
    @Type(() => VerificationTokenCreateInput)
    create!: VerificationTokenCreateInput;

    @Field(() => VerificationTokenUpdateInput, {nullable:false})
    @Type(() => VerificationTokenUpdateInput)
    update!: VerificationTokenUpdateInput;
}
