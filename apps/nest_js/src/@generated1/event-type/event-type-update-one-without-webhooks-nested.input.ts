import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventTypeCreateWithoutWebhooksInput } from './event-type-create-without-webhooks.input';
import { Type } from 'class-transformer';
import { EventTypeCreateOrConnectWithoutWebhooksInput } from './event-type-create-or-connect-without-webhooks.input';
import { EventTypeUpsertWithoutWebhooksInput } from './event-type-upsert-without-webhooks.input';
import { EventTypeWhereUniqueInput } from './event-type-where-unique.input';
import { EventTypeUpdateWithoutWebhooksInput } from './event-type-update-without-webhooks.input';

@InputType()
export class EventTypeUpdateOneWithoutWebhooksNestedInput {

    @Field(() => EventTypeCreateWithoutWebhooksInput, {nullable:true})
    @Type(() => EventTypeCreateWithoutWebhooksInput)
    create?: EventTypeCreateWithoutWebhooksInput;

    @Field(() => EventTypeCreateOrConnectWithoutWebhooksInput, {nullable:true})
    @Type(() => EventTypeCreateOrConnectWithoutWebhooksInput)
    connectOrCreate?: EventTypeCreateOrConnectWithoutWebhooksInput;

    @Field(() => EventTypeUpsertWithoutWebhooksInput, {nullable:true})
    @Type(() => EventTypeUpsertWithoutWebhooksInput)
    upsert?: EventTypeUpsertWithoutWebhooksInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => EventTypeWhereUniqueInput, {nullable:true})
    @Type(() => EventTypeWhereUniqueInput)
    connect?: EventTypeWhereUniqueInput;

    @Field(() => EventTypeUpdateWithoutWebhooksInput, {nullable:true})
    @Type(() => EventTypeUpdateWithoutWebhooksInput)
    update?: EventTypeUpdateWithoutWebhooksInput;
}
