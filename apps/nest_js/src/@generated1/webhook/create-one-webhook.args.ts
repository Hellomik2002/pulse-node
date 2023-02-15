import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { WebhookCreateInput } from './webhook-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneWebhookArgs {

    @Field(() => WebhookCreateInput, {nullable:false})
    @Type(() => WebhookCreateInput)
    data!: WebhookCreateInput;
}
