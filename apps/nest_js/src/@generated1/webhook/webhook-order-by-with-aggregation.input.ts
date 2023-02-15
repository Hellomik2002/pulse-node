import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { WebhookCountOrderByAggregateInput } from './webhook-count-order-by-aggregate.input';
import { WebhookAvgOrderByAggregateInput } from './webhook-avg-order-by-aggregate.input';
import { WebhookMaxOrderByAggregateInput } from './webhook-max-order-by-aggregate.input';
import { WebhookMinOrderByAggregateInput } from './webhook-min-order-by-aggregate.input';
import { WebhookSumOrderByAggregateInput } from './webhook-sum-order-by-aggregate.input';

@InputType()
export class WebhookOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    eventTypeId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    subscriberUrl?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    payloadTemplate?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    active?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    eventTriggers?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    appId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    secret?: keyof typeof SortOrder;

    @Field(() => WebhookCountOrderByAggregateInput, {nullable:true})
    _count?: WebhookCountOrderByAggregateInput;

    @Field(() => WebhookAvgOrderByAggregateInput, {nullable:true})
    _avg?: WebhookAvgOrderByAggregateInput;

    @Field(() => WebhookMaxOrderByAggregateInput, {nullable:true})
    _max?: WebhookMaxOrderByAggregateInput;

    @Field(() => WebhookMinOrderByAggregateInput, {nullable:true})
    _min?: WebhookMinOrderByAggregateInput;

    @Field(() => WebhookSumOrderByAggregateInput, {nullable:true})
    _sum?: WebhookSumOrderByAggregateInput;
}
