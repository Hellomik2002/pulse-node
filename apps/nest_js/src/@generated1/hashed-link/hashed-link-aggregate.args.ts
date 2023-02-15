import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { HashedLinkWhereInput } from './hashed-link-where.input';
import { Type } from 'class-transformer';
import { HashedLinkOrderByWithRelationInput } from './hashed-link-order-by-with-relation.input';
import { HashedLinkWhereUniqueInput } from './hashed-link-where-unique.input';
import { Int } from '@nestjs/graphql';
import { HashedLinkCountAggregateInput } from './hashed-link-count-aggregate.input';
import { HashedLinkAvgAggregateInput } from './hashed-link-avg-aggregate.input';
import { HashedLinkSumAggregateInput } from './hashed-link-sum-aggregate.input';
import { HashedLinkMinAggregateInput } from './hashed-link-min-aggregate.input';
import { HashedLinkMaxAggregateInput } from './hashed-link-max-aggregate.input';

@ArgsType()
export class HashedLinkAggregateArgs {

    @Field(() => HashedLinkWhereInput, {nullable:true})
    @Type(() => HashedLinkWhereInput)
    where?: HashedLinkWhereInput;

    @Field(() => [HashedLinkOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<HashedLinkOrderByWithRelationInput>;

    @Field(() => HashedLinkWhereUniqueInput, {nullable:true})
    cursor?: HashedLinkWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => HashedLinkCountAggregateInput, {nullable:true})
    _count?: HashedLinkCountAggregateInput;

    @Field(() => HashedLinkAvgAggregateInput, {nullable:true})
    _avg?: HashedLinkAvgAggregateInput;

    @Field(() => HashedLinkSumAggregateInput, {nullable:true})
    _sum?: HashedLinkSumAggregateInput;

    @Field(() => HashedLinkMinAggregateInput, {nullable:true})
    _min?: HashedLinkMinAggregateInput;

    @Field(() => HashedLinkMaxAggregateInput, {nullable:true})
    _max?: HashedLinkMaxAggregateInput;
}
