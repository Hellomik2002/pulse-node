import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { WebhookWhereInput } from './webhook-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyWebhookArgs {

    @Field(() => WebhookWhereInput, {nullable:true})
    @Type(() => WebhookWhereInput)
    where?: WebhookWhereInput;
}
