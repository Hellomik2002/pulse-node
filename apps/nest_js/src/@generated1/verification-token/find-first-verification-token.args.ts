import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { VerificationTokenWhereInput } from './verification-token-where.input';
import { Type } from 'class-transformer';
import { VerificationTokenOrderByWithRelationInput } from './verification-token-order-by-with-relation.input';
import { VerificationTokenWhereUniqueInput } from './verification-token-where-unique.input';
import { Int } from '@nestjs/graphql';
import { VerificationTokenScalarFieldEnum } from './verification-token-scalar-field.enum';

@ArgsType()
export class FindFirstVerificationTokenArgs {

    @Field(() => VerificationTokenWhereInput, {nullable:true})
    @Type(() => VerificationTokenWhereInput)
    where?: VerificationTokenWhereInput;

    @Field(() => [VerificationTokenOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<VerificationTokenOrderByWithRelationInput>;

    @Field(() => VerificationTokenWhereUniqueInput, {nullable:true})
    cursor?: VerificationTokenWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [VerificationTokenScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof VerificationTokenScalarFieldEnum>;
}
