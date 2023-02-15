import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { VerificationTokenWhereInput } from './verification-token-where.input';
import { Type } from 'class-transformer';
import { VerificationTokenOrderByWithRelationInput } from './verification-token-order-by-with-relation.input';
import { VerificationTokenWhereUniqueInput } from './verification-token-where-unique.input';
import { Int } from '@nestjs/graphql';
import { VerificationTokenCountAggregateInput } from './verification-token-count-aggregate.input';
import { VerificationTokenAvgAggregateInput } from './verification-token-avg-aggregate.input';
import { VerificationTokenSumAggregateInput } from './verification-token-sum-aggregate.input';
import { VerificationTokenMinAggregateInput } from './verification-token-min-aggregate.input';
import { VerificationTokenMaxAggregateInput } from './verification-token-max-aggregate.input';

@ArgsType()
export class VerificationTokenAggregateArgs {

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

    @Field(() => VerificationTokenCountAggregateInput, {nullable:true})
    _count?: VerificationTokenCountAggregateInput;

    @Field(() => VerificationTokenAvgAggregateInput, {nullable:true})
    _avg?: VerificationTokenAvgAggregateInput;

    @Field(() => VerificationTokenSumAggregateInput, {nullable:true})
    _sum?: VerificationTokenSumAggregateInput;

    @Field(() => VerificationTokenMinAggregateInput, {nullable:true})
    _min?: VerificationTokenMinAggregateInput;

    @Field(() => VerificationTokenMaxAggregateInput, {nullable:true})
    _max?: VerificationTokenMaxAggregateInput;
}
