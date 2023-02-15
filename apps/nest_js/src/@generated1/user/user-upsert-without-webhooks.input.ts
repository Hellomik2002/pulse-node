import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutWebhooksInput } from './user-update-without-webhooks.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutWebhooksInput } from './user-create-without-webhooks.input';

@InputType()
export class UserUpsertWithoutWebhooksInput {

    @Field(() => UserUpdateWithoutWebhooksInput, {nullable:false})
    @Type(() => UserUpdateWithoutWebhooksInput)
    update!: UserUpdateWithoutWebhooksInput;

    @Field(() => UserCreateWithoutWebhooksInput, {nullable:false})
    @Type(() => UserCreateWithoutWebhooksInput)
    create!: UserCreateWithoutWebhooksInput;
}
