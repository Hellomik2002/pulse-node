import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { WebhookTriggerEvents } from './webhook-trigger-events.enum';
import { WebhookCountAggregate } from './webhook-count-aggregate.output';
import { WebhookAvgAggregate } from './webhook-avg-aggregate.output';
import { WebhookSumAggregate } from './webhook-sum-aggregate.output';
import { WebhookMinAggregate } from './webhook-min-aggregate.output';
import { WebhookMaxAggregate } from './webhook-max-aggregate.output';

@ObjectType()
export class WebhookGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => Int, {nullable:true})
    userId?: number;

    @Field(() => Int, {nullable:true})
    eventTypeId?: number;

    @Field(() => String, {nullable:false})
    subscriberUrl!: string;

    @Field(() => String, {nullable:true})
    payloadTemplate?: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Boolean, {nullable:false})
    active!: boolean;

    @Field(() => [WebhookTriggerEvents], {nullable:true})
    eventTriggers?: Array<keyof typeof WebhookTriggerEvents>;

    @Field(() => String, {nullable:true})
    appId?: string;

    @Field(() => String, {nullable:true})
    secret?: string;

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
