import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { VerificationTokenUpdateManyMutationInput } from './verification-token-update-many-mutation.input';
import { Type } from 'class-transformer';
import { VerificationTokenWhereInput } from './verification-token-where.input';

@ArgsType()
export class UpdateManyVerificationTokenArgs {

    @Field(() => VerificationTokenUpdateManyMutationInput, {nullable:false})
    @Type(() => VerificationTokenUpdateManyMutationInput)
    data!: VerificationTokenUpdateManyMutationInput;

    @Field(() => VerificationTokenWhereInput, {nullable:true})
    @Type(() => VerificationTokenWhereInput)
    where?: VerificationTokenWhereInput;
}
