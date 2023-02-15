import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutWebhooksInput } from './user-create-without-webhooks.input';

@InputType()
export class UserCreateOrConnectWithoutWebhooksInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: UserWhereUniqueInput;

    @Field(() => UserCreateWithoutWebhooksInput, {nullable:false})
    @Type(() => UserCreateWithoutWebhooksInput)
    create!: UserCreateWithoutWebhooksInput;
}
