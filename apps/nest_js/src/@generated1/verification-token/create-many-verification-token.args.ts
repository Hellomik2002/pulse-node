import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { VerificationTokenCreateManyInput } from './verification-token-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyVerificationTokenArgs {

    @Field(() => [VerificationTokenCreateManyInput], {nullable:false})
    @Type(() => VerificationTokenCreateManyInput)
    data!: Array<VerificationTokenCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
