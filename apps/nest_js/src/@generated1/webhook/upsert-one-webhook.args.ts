import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { WebhookWhereUniqueInput } from './webhook-where-unique.input';
import { Type } from 'class-transformer';
import { WebhookCreateInput } from './webhook-create.input';
import { WebhookUpdateInput } from './webhook-update.input';

@ArgsType()
export class UpsertOneWebhookArgs {

    @Field(() => WebhookWhereUniqueInput, {nullable:false})
    @Type(() => WebhookWhereUniqueInput)
    where!: WebhookWhereUniqueInput;

    @Field(() => WebhookCreateInput, {nullable:false})
    @Type(() => WebhookCreateInput)
    create!: WebhookCreateInput;

    @Field(() => WebhookUpdateInput, {nullable:false})
    @Type(() => WebhookUpdateInput)
    update!: WebhookUpdateInput;
}
