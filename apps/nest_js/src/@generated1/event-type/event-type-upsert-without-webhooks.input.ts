import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventTypeUpdateWithoutWebhooksInput } from './event-type-update-without-webhooks.input';
import { Type } from 'class-transformer';
import { EventTypeCreateWithoutWebhooksInput } from './event-type-create-without-webhooks.input';

@InputType()
export class EventTypeUpsertWithoutWebhooksInput {

    @Field(() => EventTypeUpdateWithoutWebhooksInput, {nullable:false})
    @Type(() => EventTypeUpdateWithoutWebhooksInput)
    update!: EventTypeUpdateWithoutWebhooksInput;

    @Field(() => EventTypeCreateWithoutWebhooksInput, {nullable:false})
    @Type(() => EventTypeCreateWithoutWebhooksInput)
    create!: EventTypeCreateWithoutWebhooksInput;
}
