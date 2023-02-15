import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class WebhookCountAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    userId?: true;

    @Field(() => Boolean, {nullable:true})
    eventTypeId?: true;

    @Field(() => Boolean, {nullable:true})
    subscriberUrl?: true;

    @Field(() => Boolean, {nullable:true})
    payloadTemplate?: true;

    @Field(() => Boolean, {nullable:true})
    createdAt?: true;

    @Field(() => Boolean, {nullable:true})
    active?: true;

    @Field(() => Boolean, {nullable:true})
    eventTriggers?: true;

    @Field(() => Boolean, {nullable:true})
    appId?: true;

    @Field(() => Boolean, {nullable:true})
    secret?: true;

    @Field(() => Boolean, {nullable:true})
    _all?: true;
}
