import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WebhookWhereUniqueInput } from './webhook-where-unique.input';
import { Type } from 'class-transformer';
import { WebhookUpdateWithoutEventTypeInput } from './webhook-update-without-event-type.input';
import { WebhookCreateWithoutEventTypeInput } from './webhook-create-without-event-type.input';

@InputType()
export class WebhookUpsertWithWhereUniqueWithoutEventTypeInput {

    @Field(() => WebhookWhereUniqueInput, {nullable:false})
    @Type(() => WebhookWhereUniqueInput)
    where!: WebhookWhereUniqueInput;

    @Field(() => WebhookUpdateWithoutEventTypeInput, {nullable:false})
    @Type(() => WebhookUpdateWithoutEventTypeInput)
    update!: WebhookUpdateWithoutEventTypeInput;

    @Field(() => WebhookCreateWithoutEventTypeInput, {nullable:false})
    @Type(() => WebhookCreateWithoutEventTypeInput)
    create!: WebhookCreateWithoutEventTypeInput;
}
