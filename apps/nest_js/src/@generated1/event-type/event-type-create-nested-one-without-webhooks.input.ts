import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventTypeCreateWithoutWebhooksInput } from './event-type-create-without-webhooks.input';
import { Type } from 'class-transformer';
import { EventTypeCreateOrConnectWithoutWebhooksInput } from './event-type-create-or-connect-without-webhooks.input';
import { EventTypeWhereUniqueInput } from './event-type-where-unique.input';

@InputType()
export class EventTypeCreateNestedOneWithoutWebhooksInput {

    @Field(() => EventTypeCreateWithoutWebhooksInput, {nullable:true})
    @Type(() => EventTypeCreateWithoutWebhooksInput)
    create?: EventTypeCreateWithoutWebhooksInput;

    @Field(() => EventTypeCreateOrConnectWithoutWebhooksInput, {nullable:true})
    @Type(() => EventTypeCreateOrConnectWithoutWebhooksInput)
    connectOrCreate?: EventTypeCreateOrConnectWithoutWebhooksInput;

    @Field(() => EventTypeWhereUniqueInput, {nullable:true})
    @Type(() => EventTypeWhereUniqueInput)
    connect?: EventTypeWhereUniqueInput;
}
