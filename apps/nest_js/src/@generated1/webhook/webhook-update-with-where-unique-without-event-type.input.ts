import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WebhookWhereUniqueInput } from './webhook-where-unique.input';
import { Type } from 'class-transformer';
import { WebhookUpdateWithoutEventTypeInput } from './webhook-update-without-event-type.input';

@InputType()
export class WebhookUpdateWithWhereUniqueWithoutEventTypeInput {

    @Field(() => WebhookWhereUniqueInput, {nullable:false})
    @Type(() => WebhookWhereUniqueInput)
    where!: WebhookWhereUniqueInput;

    @Field(() => WebhookUpdateWithoutEventTypeInput, {nullable:false})
    @Type(() => WebhookUpdateWithoutEventTypeInput)
    data!: WebhookUpdateWithoutEventTypeInput;
}
