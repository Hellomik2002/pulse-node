import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { WebhookCreateManyInput } from './webhook-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyWebhookArgs {

    @Field(() => [WebhookCreateManyInput], {nullable:false})
    @Type(() => WebhookCreateManyInput)
    data!: Array<WebhookCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
