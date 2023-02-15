import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AppWhereUniqueInput } from './app-where-unique.input';
import { Type } from 'class-transformer';
import { AppCreateWithoutWebhookInput } from './app-create-without-webhook.input';

@InputType()
export class AppCreateOrConnectWithoutWebhookInput {

    @Field(() => AppWhereUniqueInput, {nullable:false})
    @Type(() => AppWhereUniqueInput)
    where!: AppWhereUniqueInput;

    @Field(() => AppCreateWithoutWebhookInput, {nullable:false})
    @Type(() => AppCreateWithoutWebhookInput)
    create!: AppCreateWithoutWebhookInput;
}
