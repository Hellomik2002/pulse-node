import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WebhookTriggerEvents } from './webhook-trigger-events.enum';

@InputType()
export class WebhookUpdateeventTriggersInput {

    @Field(() => [WebhookTriggerEvents], {nullable:true})
    set?: Array<keyof typeof WebhookTriggerEvents>;

    @Field(() => [WebhookTriggerEvents], {nullable:true})
    push?: Array<keyof typeof WebhookTriggerEvents>;
}
