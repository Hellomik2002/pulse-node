import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ApiKeyWhereInput } from './api-key-where.input';
import { Type } from 'class-transformer';
import { ApiKeyOrderByWithRelationInput } from './api-key-order-by-with-relation.input';
import { ApiKeyWhereUniqueInput } from './api-key-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ApiKeyCountAggregateInput } from './api-key-count-aggregate.input';
import { ApiKeyAvgAggregateInput } from './api-key-avg-aggregate.input';
import { ApiKeySumAggregateInput } from './api-key-sum-aggregate.input';
import { ApiKeyMinAggregateInput } from './api-key-min-aggregate.input';
import { ApiKeyMaxAggregateInput } from './api-key-max-aggregate.input';

@ArgsType()
export class ApiKeyAggregateArgs {

    @Field(() => ApiKeyWhereInput, {nullable:true})
    @Type(() => ApiKeyWhereInput)
    where?: ApiKeyWhereInput;

    @Field(() => [ApiKeyOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ApiKeyOrderByWithRelationInput>;

    @Field(() => ApiKeyWhereUniqueInput, {nullable:true})
    cursor?: ApiKeyWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => ApiKeyCountAggregateInput, {nullable:true})
    _count?: ApiKeyCountAggregateInput;

    @Field(() => ApiKeyAvgAggregateInput, {nullable:true})
    _avg?: ApiKeyAvgAggregateInput;

    @Field(() => ApiKeySumAggregateInput, {nullable:true})
    _sum?: ApiKeySumAggregateInput;

    @Field(() => ApiKeyMinAggregateInput, {nullable:true})
    _min?: ApiKeyMinAggregateInput;

    @Field(() => ApiKeyMaxAggregateInput, {nullable:true})
    _max?: ApiKeyMaxAggregateInput;
}
