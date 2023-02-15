import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { WebhookCountAggregate } from './webhook-count-aggregate.output';
import { WebhookAvgAggregate } from './webhook-avg-aggregate.output';
import { WebhookSumAggregate } from './webhook-sum-aggregate.output';
import { WebhookMinAggregate } from './webhook-min-aggregate.output';
import { WebhookMaxAggregate } from './webhook-max-aggregate.output';

@ObjectType()
export class AggregateWebhook {

    @Field(() => WebhookCountAggregate, {nullable:true})
    _count?: WebhookCountAggregate;

    @Field(() => WebhookAvgAggregate, {nullable:true})
    _avg?: WebhookAvgAggregate;

    @Field(() => WebhookSumAggregate, {nullable:true})
    _sum?: WebhookSumAggregate;

    @Field(() => WebhookMinAggregate, {nullable:true})
    _min?: WebhookMinAggregate;

    @Field(() => WebhookMaxAggregate, {nullable:true})
    _max?: WebhookMaxAggregate;
}
