import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AppCreateWithoutWebhookInput } from './app-create-without-webhook.input';
import { Type } from 'class-transformer';
import { AppCreateOrConnectWithoutWebhookInput } from './app-create-or-connect-without-webhook.input';
import { AppUpsertWithoutWebhookInput } from './app-upsert-without-webhook.input';
import { AppWhereUniqueInput } from './app-where-unique.input';
import { AppUpdateWithoutWebhookInput } from './app-update-without-webhook.input';

@InputType()
export class AppUpdateOneWithoutWebhookNestedInput {

    @Field(() => AppCreateWithoutWebhookInput, {nullable:true})
    @Type(() => AppCreateWithoutWebhookInput)
    create?: AppCreateWithoutWebhookInput;

    @Field(() => AppCreateOrConnectWithoutWebhookInput, {nullable:true})
    @Type(() => AppCreateOrConnectWithoutWebhookInput)
    connectOrCreate?: AppCreateOrConnectWithoutWebhookInput;

    @Field(() => AppUpsertWithoutWebhookInput, {nullable:true})
    @Type(() => AppUpsertWithoutWebhookInput)
    upsert?: AppUpsertWithoutWebhookInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => AppWhereUniqueInput, {nullable:true})
    @Type(() => AppWhereUniqueInput)
    connect?: AppWhereUniqueInput;

    @Field(() => AppUpdateWithoutWebhookInput, {nullable:true})
    @Type(() => AppUpdateWithoutWebhookInput)
    update?: AppUpdateWithoutWebhookInput;
}
