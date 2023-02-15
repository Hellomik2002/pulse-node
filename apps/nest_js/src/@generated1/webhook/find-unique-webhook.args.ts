import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { WebhookWhereUniqueInput } from './webhook-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueWebhookArgs {

    @Field(() => WebhookWhereUniqueInput, {nullable:false})
    @Type(() => WebhookWhereUniqueInput)
    where!: WebhookWhereUniqueInput;
}
