import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AppCreateWithoutWebhookInput } from './app-create-without-webhook.input';
import { Type } from 'class-transformer';
import { AppCreateOrConnectWithoutWebhookInput } from './app-create-or-connect-without-webhook.input';
import { AppWhereUniqueInput } from './app-where-unique.input';

@InputType()
export class AppCreateNestedOneWithoutWebhookInput {

    @Field(() => AppCreateWithoutWebhookInput, {nullable:true})
    @Type(() => AppCreateWithoutWebhookInput)
    create?: AppCreateWithoutWebhookInput;

    @Field(() => AppCreateOrConnectWithoutWebhookInput, {nullable:true})
    @Type(() => AppCreateOrConnectWithoutWebhookInput)
    connectOrCreate?: AppCreateOrConnectWithoutWebhookInput;

    @Field(() => AppWhereUniqueInput, {nullable:true})
    @Type(() => AppWhereUniqueInput)
    connect?: AppWhereUniqueInput;
}
