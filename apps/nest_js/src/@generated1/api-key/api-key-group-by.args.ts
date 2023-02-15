import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ApiKeyWhereInput } from './api-key-where.input';
import { Type } from 'class-transformer';
import { ApiKeyOrderByWithAggregationInput } from './api-key-order-by-with-aggregation.input';
import { ApiKeyScalarFieldEnum } from './api-key-scalar-field.enum';
import { ApiKeyScalarWhereWithAggregatesInput } from './api-key-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { ApiKeyCountAggregateInput } from './api-key-count-aggregate.input';
import { ApiKeyAvgAggregateInput } from './api-key-avg-aggregate.input';
import { ApiKeySumAggregateInput } from './api-key-sum-aggregate.input';
import { ApiKeyMinAggregateInput } from './api-key-min-aggregate.input';
import { ApiKeyMaxAggregateInput } from './api-key-max-aggregate.input';

@ArgsType()
export class ApiKeyGroupByArgs {

    @Field(() => ApiKeyWhereInput, {nullable:true})
    @Type(() => ApiKeyWhereInput)
    where?: ApiKeyWhereInput;

    @Field(() => [ApiKeyOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<ApiKeyOrderByWithAggregationInput>;

    @Field(() => [ApiKeyScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof ApiKeyScalarFieldEnum>;

    @Field(() => ApiKeyScalarWhereWithAggregatesInput, {nullable:true})
    having?: ApiKeyScalarWhereWithAggregatesInput;

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
