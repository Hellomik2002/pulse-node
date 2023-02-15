import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WebhookWhereUniqueInput } from './webhook-where-unique.input';
import { Type } from 'class-transformer';
import { WebhookUpdateWithoutUserInput } from './webhook-update-without-user.input';
import { WebhookCreateWithoutUserInput } from './webhook-create-without-user.input';

@InputType()
export class WebhookUpsertWithWhereUniqueWithoutUserInput {

    @Field(() => WebhookWhereUniqueInput, {nullable:false})
    @Type(() => WebhookWhereUniqueInput)
    where!: WebhookWhereUniqueInput;

    @Field(() => WebhookUpdateWithoutUserInput, {nullable:false})
    @Type(() => WebhookUpdateWithoutUserInput)
    update!: WebhookUpdateWithoutUserInput;

    @Field(() => WebhookCreateWithoutUserInput, {nullable:false})
    @Type(() => WebhookCreateWithoutUserInput)
    create!: WebhookCreateWithoutUserInput;
}
