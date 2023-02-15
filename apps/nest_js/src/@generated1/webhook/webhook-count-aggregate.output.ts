import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class WebhookCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    userId!: number;

    @Field(() => Int, {nullable:false})
    eventTypeId!: number;

    @Field(() => Int, {nullable:false})
    subscriberUrl!: number;

    @Field(() => Int, {nullable:false})
    payloadTemplate!: number;

    @Field(() => Int, {nullable:false})
    createdAt!: number;

    @Field(() => Int, {nullable:false})
    active!: number;

    @Field(() => Int, {nullable:false})
    eventTriggers!: number;

    @Field(() => Int, {nullable:false})
    appId!: number;

    @Field(() => Int, {nullable:false})
    secret!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
