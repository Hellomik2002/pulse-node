import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutApiKeysInput } from '../user/user-create-nested-one-without-api-keys.input';

@InputType()
export class ApiKeyCreateWithoutAppInput {

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
}
