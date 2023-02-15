import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { WebhookCreateeventTriggersInput } from './webhook-createevent-triggers.input';

@InputType()
export class WebhookUncheckedCreateInput {

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

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Boolean, {nullable:true})
    active?: boolean;

    @Field(() => WebhookCreateeventTriggersInput, {nullable:true})
    eventTriggers?: WebhookCreateeventTriggersInput;

    @Field(() => String, {nullable:true})
    appId?: string;

    @Field(() => String, {nullable:true})
    secret?: string;
}
