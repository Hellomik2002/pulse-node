import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { WebhookUpdateInput } from './webhook-update.input';
import { Type } from 'class-transformer';
import { WebhookWhereUniqueInput } from './webhook-where-unique.input';

@ArgsType()
export class UpdateOneWebhookArgs {

    @Field(() => WebhookUpdateInput, {nullable:false})
    @Type(() => WebhookUpdateInput)
    data!: WebhookUpdateInput;

    @Field(() => WebhookWhereUniqueInput, {nullable:false})
    @Type(() => WebhookWhereUniqueInput)
    where!: WebhookWhereUniqueInput;
}
