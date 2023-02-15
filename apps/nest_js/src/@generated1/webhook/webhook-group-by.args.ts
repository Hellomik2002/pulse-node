import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { WebhookWhereInput } from './webhook-where.input';
import { Type } from 'class-transformer';
import { WebhookOrderByWithAggregationInput } from './webhook-order-by-with-aggregation.input';
import { WebhookScalarFieldEnum } from './webhook-scalar-field.enum';
import { WebhookScalarWhereWithAggregatesInput } from './webhook-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { WebhookCountAggregateInput } from './webhook-count-aggregate.input';
import { WebhookAvgAggregateInput } from './webhook-avg-aggregate.input';
import { WebhookSumAggregateInput } from './webhook-sum-aggregate.input';
import { WebhookMinAggregateInput } from './webhook-min-aggregate.input';
import { WebhookMaxAggregateInput } from './webhook-max-aggregate.input';

@ArgsType()
export class WebhookGroupByArgs {

    @Field(() => WebhookWhereInput, {nullable:true})
    @Type(() => WebhookWhereInput)
    where?: WebhookWhereInput;

    @Field(() => [WebhookOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<WebhookOrderByWithAggregationInput>;

    @Field(() => [WebhookScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof WebhookScalarFieldEnum>;

    @Field(() => WebhookScalarWhereWithAggregatesInput, {nullable:true})
    having?: WebhookScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => WebhookCountAggregateInput, {nullable:true})
    _count?: WebhookCountAggregateInput;

    @Field(() => WebhookAvgAggregateInput, {nullable:true})
    _avg?: WebhookAvgAggregateInput;

    @Field(() => WebhookSumAggregateInput, {nullable:true})
    _sum?: WebhookSumAggregateInput;

    @Field(() => WebhookMinAggregateInput, {nullable:true})
    _min?: WebhookMinAggregateInput;

    @Field(() => WebhookMaxAggregateInput, {nullable:true})
    _max?: WebhookMaxAggregateInput;
}
