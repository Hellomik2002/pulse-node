import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutApiKeysInput } from './user-create-without-api-keys.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutApiKeysInput } from './user-create-or-connect-without-api-keys.input';
import { UserUpsertWithoutApiKeysInput } from './user-upsert-without-api-keys.input';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithoutApiKeysInput } from './user-update-without-api-keys.input';

@InputType()
export class UserUpdateOneWithoutApiKeysNestedInput {

    @Field(() => UserCreateWithoutApiKeysInput, {nullable:true})
    @Type(() => UserCreateWithoutApiKeysInput)
    create?: UserCreateWithoutApiKeysInput;

    @Field(() => UserCreateOrConnectWithoutApiKeysInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutApiKeysInput)
    connectOrCreate?: UserCreateOrConnectWithoutApiKeysInput;

    @Field(() => UserUpsertWithoutApiKeysInput, {nullable:true})
    @Type(() => UserUpsertWithoutApiKeysInput)
    upsert?: UserUpsertWithoutApiKeysInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: UserWhereUniqueInput;

    @Field(() => UserUpdateWithoutApiKeysInput, {nullable:true})
    @Type(() => UserUpdateWithoutApiKeysInput)
    update?: UserUpdateWithoutApiKeysInput;
}
