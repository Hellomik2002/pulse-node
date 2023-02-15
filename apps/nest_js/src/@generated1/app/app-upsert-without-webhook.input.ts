import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AppUpdateWithoutWebhookInput } from './app-update-without-webhook.input';
import { Type } from 'class-transformer';
import { AppCreateWithoutWebhookInput } from './app-create-without-webhook.input';

@InputType()
export class AppUpsertWithoutWebhookInput {

    @Field(() => AppUpdateWithoutWebhookInput, {nullable:false})
    @Type(() => AppUpdateWithoutWebhookInput)
    update!: AppUpdateWithoutWebhookInput;

    @Field(() => AppCreateWithoutWebhookInput, {nullable:false})
    @Type(() => AppCreateWithoutWebhookInput)
    create!: AppCreateWithoutWebhookInput;
}
