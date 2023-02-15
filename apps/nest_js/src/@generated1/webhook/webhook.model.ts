import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { WebhookTriggerEvents } from './webhook-trigger-events.enum';
import { User } from '../user/user.model';
import { EventType } from '../event-type/event-type.model';
import { App } from '../app/app.model';

@ObjectType()
export class Webhook {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => Int, {nullable:true})
    userId!: number | null;

    @Field(() => Int, {nullable:true})
    eventTypeId!: number | null;

    @Field(() => String, {nullable:false})
    subscriberUrl!: string;

    @Field(() => String, {nullable:true})
    payloadTemplate!: string | null;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Boolean, {nullable:false,defaultValue:true})
    active!: boolean;

    @Field(() => [WebhookTriggerEvents], {nullable:true})
    eventTriggers!: Array<keyof typeof WebhookTriggerEvents>;

    @Field(() => User, {nullable:true})
    user?: User | null;

    @Field(() => EventType, {nullable:true})
    eventType?: EventType | null;

    @Field(() => App, {nullable:true})
    app?: App | null;

    @Field(() => String, {nullable:true})
    appId!: string | null;

    @Field(() => String, {nullable:true})
    secret!: string | null;
}
