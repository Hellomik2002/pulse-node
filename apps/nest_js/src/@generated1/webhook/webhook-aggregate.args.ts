import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { WebhookWhereInput } from './webhook-where.input';
import { Type } from 'class-transformer';
import { WebhookOrderByWithRelationInput } from './webhook-order-by-with-relation.input';
import { WebhookWhereUniqueInput } from './webhook-where-unique.input';
import { Int } from '@nestjs/graphql';
import { WebhookCountAggregateInput } from './webhook-count-aggregate.input';
import { WebhookAvgAggregateInput } from './webhook-avg-aggregate.input';
import { WebhookSumAggregateInput } from './webhook-sum-aggregate.input';
import { WebhookMinAggregateInput } from './webhook-min-aggregate.input';
import { WebhookMaxAggregateInput } from './webhook-max-aggregate.input';

@ArgsType()
export class WebhookAggregateArgs {

    @Field(() => WebhookWhereInput, {nullable:true})
    @Type(() => WebhookWhereInput)
    where?: WebhookWhereInput;

    @Field(() => [WebhookOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<WebhookOrderByWithRelationInput>;

    @Field(() => WebhookWhereUniqueInput, {nullable:true})
    cursor?: WebhookWhereUniqueInput;

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
