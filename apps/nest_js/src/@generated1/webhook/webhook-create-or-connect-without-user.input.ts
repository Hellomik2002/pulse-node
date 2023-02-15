import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WebhookWhereUniqueInput } from './webhook-where-unique.input';
import { Type } from 'class-transformer';
import { WebhookCreateWithoutUserInput } from './webhook-create-without-user.input';

@InputType()
export class WebhookCreateOrConnectWithoutUserInput {

    @Field(() => WebhookWhereUniqueInput, {nullable:false})
    @Type(() => WebhookWhereUniqueInput)
    where!: WebhookWhereUniqueInput;

    @Field(() => WebhookCreateWithoutUserInput, {nullable:false})
    @Type(() => WebhookCreateWithoutUserInput)
    create!: WebhookCreateWithoutUserInput;
}
