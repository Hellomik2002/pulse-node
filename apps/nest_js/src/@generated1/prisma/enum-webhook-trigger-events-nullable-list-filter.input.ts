import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WebhookTriggerEvents } from '../webhook/webhook-trigger-events.enum';

@InputType()
export class EnumWebhookTriggerEventsNullableListFilter {

    @Field(() => [WebhookTriggerEvents], {nullable:true})
    equals?: Array<keyof typeof WebhookTriggerEvents>;

    @Field(() => WebhookTriggerEvents, {nullable:true})
    has?: keyof typeof WebhookTriggerEvents;

    @Field(() => [WebhookTriggerEvents], {nullable:true})
    hasEvery?: Array<keyof typeof WebhookTriggerEvents>;

    @Field(() => [WebhookTriggerEvents], {nullable:true})
    hasSome?: Array<keyof typeof WebhookTriggerEvents>;

    @Field(() => Boolean, {nullable:true})
    isEmpty?: boolean;
}
