import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WebhookWhereInput } from './webhook-where.input';

@InputType()
export class WebhookListRelationFilter {

    @Field(() => WebhookWhereInput, {nullable:true})
    every?: WebhookWhereInput;

    @Field(() => WebhookWhereInput, {nullable:true})
    some?: WebhookWhereInput;

    @Field(() => WebhookWhereInput, {nullable:true})
    none?: WebhookWhereInput;
}
