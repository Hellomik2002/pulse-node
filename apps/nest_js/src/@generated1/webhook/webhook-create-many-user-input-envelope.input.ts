import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WebhookCreateManyUserInput } from './webhook-create-many-user.input';
import { Type } from 'class-transformer';

@InputType()
export class WebhookCreateManyUserInputEnvelope {

    @Field(() => [WebhookCreateManyUserInput], {nullable:false})
    @Type(() => WebhookCreateManyUserInput)
    data!: Array<WebhookCreateManyUserInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
