import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WebhookWhereUniqueInput } from './webhook-where-unique.input';
import { Type } from 'class-transformer';
import { WebhookCreateWithoutAppInput } from './webhook-create-without-app.input';

@InputType()
export class WebhookCreateOrConnectWithoutAppInput {

    @Field(() => WebhookWhereUniqueInput, {nullable:false})
    @Type(() => WebhookWhereUniqueInput)
    where!: WebhookWhereUniqueInput;

    @Field(() => WebhookCreateWithoutAppInput, {nullable:false})
    @Type(() => WebhookCreateWithoutAppInput)
    create!: WebhookCreateWithoutAppInput;
}
