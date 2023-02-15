import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WebhookTriggerEvents } from './webhook-trigger-events.enum';

@InputType()
export class WebhookCreateeventTriggersInput {

    @Field(() => [WebhookTriggerEvents], {nullable:false})
    set!: Array<keyof typeof WebhookTriggerEvents>;
}
