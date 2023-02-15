import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventTypeWhereUniqueInput } from './event-type-where-unique.input';
import { Type } from 'class-transformer';
import { EventTypeCreateWithoutWebhooksInput } from './event-type-create-without-webhooks.input';

@InputType()
export class EventTypeCreateOrConnectWithoutWebhooksInput {

    @Field(() => EventTypeWhereUniqueInput, {nullable:false})
    @Type(() => EventTypeWhereUniqueInput)
    where!: EventTypeWhereUniqueInput;

    @Field(() => EventTypeCreateWithoutWebhooksInput, {nullable:false})
    @Type(() => EventTypeCreateWithoutWebhooksInput)
    create!: EventTypeCreateWithoutWebhooksInput;
}
