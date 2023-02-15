import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutWebhooksInput } from './user-create-without-webhooks.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutWebhooksInput } from './user-create-or-connect-without-webhooks.input';
import { UserUpsertWithoutWebhooksInput } from './user-upsert-without-webhooks.input';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithoutWebhooksInput } from './user-update-without-webhooks.input';

@InputType()
export class UserUpdateOneWithoutWebhooksNestedInput {

    @Field(() => UserCreateWithoutWebhooksInput, {nullable:true})
    @Type(() => UserCreateWithoutWebhooksInput)
    create?: UserCreateWithoutWebhooksInput;

    @Field(() => UserCreateOrConnectWithoutWebhooksInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutWebhooksInput)
    connectOrCreate?: UserCreateOrConnectWithoutWebhooksInput;

    @Field(() => UserUpsertWithoutWebhooksInput, {nullable:true})
    @Type(() => UserUpsertWithoutWebhooksInput)
    upsert?: UserUpsertWithoutWebhooksInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: UserWhereUniqueInput;

    @Field(() => UserUpdateWithoutWebhooksInput, {nullable:true})
    @Type(() => UserUpdateWithoutWebhooksInput)
    update?: UserUpdateWithoutWebhooksInput;
}
