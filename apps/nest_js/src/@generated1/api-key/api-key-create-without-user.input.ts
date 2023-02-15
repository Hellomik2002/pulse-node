import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AppCreateNestedOneWithoutApiKeyInput } from '../app/app-create-nested-one-without-api-key.input';

@InputType()
export class ApiKeyCreateWithoutUserInput {

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

    @Field(() => AppCreateNestedOneWithoutApiKeyInput, {nullable:true})
    app?: AppCreateNestedOneWithoutApiKeyInput;
}
