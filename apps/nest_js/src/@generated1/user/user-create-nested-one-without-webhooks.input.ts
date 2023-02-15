import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutWebhooksInput } from './user-create-without-webhooks.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutWebhooksInput } from './user-create-or-connect-without-webhooks.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutWebhooksInput {

    @Field(() => UserCreateWithoutWebhooksInput, {nullable:true})
    @Type(() => UserCreateWithoutWebhooksInput)
    create?: UserCreateWithoutWebhooksInput;

    @Field(() => UserCreateOrConnectWithoutWebhooksInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutWebhooksInput)
    connectOrCreate?: UserCreateOrConnectWithoutWebhooksInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: UserWhereUniqueInput;
}
