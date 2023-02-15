import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutApiKeysInput } from '../user/user-create-nested-one-without-api-keys.input';
import { AppCreateNestedOneWithoutApiKeyInput } from '../app/app-create-nested-one-without-api-key.input';

@InputType()
export class ApiKeyCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    note?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    expiresAt?: Date | string;

    @Field(() => Date, {nullable:true})
    lastUsedAt?: Date | string;

    @Field(() => String, {nullable:false})
    hashedKey!: string;

    @Field(() => UserCreateNestedOneWithoutApiKeysInput, {nullable:true})
    user?: UserCreateNestedOneWithoutApiKeysInput;

    @Field(() => AppCreateNestedOneWithoutApiKeyInput, {nullable:true})
    app?: AppCreateNestedOneWithoutApiKeyInput;
}
