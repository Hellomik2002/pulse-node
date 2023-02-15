import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { HashedLinkWhereInput } from './hashed-link-where.input';
import { Type } from 'class-transformer';
import { HashedLinkOrderByWithAggregationInput } from './hashed-link-order-by-with-aggregation.input';
import { HashedLinkScalarFieldEnum } from './hashed-link-scalar-field.enum';
import { HashedLinkScalarWhereWithAggregatesInput } from './hashed-link-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { HashedLinkCountAggregateInput } from './hashed-link-count-aggregate.input';
import { HashedLinkAvgAggregateInput } from './hashed-link-avg-aggregate.input';
import { HashedLinkSumAggregateInput } from './hashed-link-sum-aggregate.input';
import { HashedLinkMinAggregateInput } from './hashed-link-min-aggregate.input';
import { HashedLinkMaxAggregateInput } from './hashed-link-max-aggregate.input';

@ArgsType()
export class HashedLinkGroupByArgs {

    @Field(() => HashedLinkWhereInput, {nullable:true})
    @Type(() => HashedLinkWhereInput)
    where?: HashedLinkWhereInput;

    @Field(() => [HashedLinkOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<HashedLinkOrderByWithAggregationInput>;

    @Field(() => [HashedLinkScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof HashedLinkScalarFieldEnum>;

    @Field(() => HashedLinkScalarWhereWithAggregatesInput, {nullable:true})
    having?: HashedLinkScalarWhereWithAggregatesInput;

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
