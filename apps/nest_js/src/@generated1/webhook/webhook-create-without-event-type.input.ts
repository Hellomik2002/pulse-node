import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WebhookCreateeventTriggersInput } from './webhook-createevent-triggers.input';
import { UserCreateNestedOneWithoutWebhooksInput } from '../user/user-create-nested-one-without-webhooks.input';
import { AppCreateNestedOneWithoutWebhookInput } from '../app/app-create-nested-one-without-webhook.input';

@InputType()
export class WebhookCreateWithoutEventTypeInput {

    @Field(() => String, {nullable:false})
    id!: string;

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

    @Field(() => UserCreateNestedOneWithoutWebhooksInput, {nullable:true})
    user?: UserCreateNestedOneWithoutWebhooksInput;

    @Field(() => AppCreateNestedOneWithoutWebhookInput, {nullable:true})
    app?: AppCreateNestedOneWithoutWebhookInput;

    @Field(() => String, {nullable:true})
    secret?: string;
}
