import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WebhookWhereUniqueInput } from './webhook-where-unique.input';
import { Type } from 'class-transformer';
import { WebhookUpdateWithoutAppInput } from './webhook-update-without-app.input';
import { WebhookCreateWithoutAppInput } from './webhook-create-without-app.input';

@InputType()
export class WebhookUpsertWithWhereUniqueWithoutAppInput {

    @Field(() => WebhookWhereUniqueInput, {nullable:false})
    @Type(() => WebhookWhereUniqueInput)
    where!: WebhookWhereUniqueInput;

    @Field(() => WebhookUpdateWithoutAppInput, {nullable:false})
    @Type(() => WebhookUpdateWithoutAppInput)
    update!: WebhookUpdateWithoutAppInput;

    @Field(() => WebhookCreateWithoutAppInput, {nullable:false})
    @Type(() => WebhookCreateWithoutAppInput)
    create!: WebhookCreateWithoutAppInput;
}
