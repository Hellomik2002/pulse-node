import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WebhookWhereUniqueInput } from './webhook-where-unique.input';
import { Type } from 'class-transformer';
import { WebhookCreateWithoutEventTypeInput } from './webhook-create-without-event-type.input';

@InputType()
export class WebhookCreateOrConnectWithoutEventTypeInput {

    @Field(() => WebhookWhereUniqueInput, {nullable:false})
    @Type(() => WebhookWhereUniqueInput)
    where!: WebhookWhereUniqueInput;

    @Field(() => WebhookCreateWithoutEventTypeInput, {nullable:false})
    @Type(() => WebhookCreateWithoutEventTypeInput)
    create!: WebhookCreateWithoutEventTypeInput;
}
