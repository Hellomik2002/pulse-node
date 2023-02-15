import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutCredentialsInput } from './user-create-without-credentials.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutCredentialsInput } from './user-create-or-connect-without-credentials.input';
import { UserUpsertWithoutCredentialsInput } from './user-upsert-without-credentials.input';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithoutCredentialsInput } from './user-update-without-credentials.input';

@InputType()
export class UserUpdateOneWithoutCredentialsNestedInput {

    @Field(() => UserCreateWithoutCredentialsInput, {nullable:true})
    @Type(() => UserCreateWithoutCredentialsInput)
    create?: UserCreateWithoutCredentialsInput;

    @Field(() => UserCreateOrConnectWithoutCredentialsInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutCredentialsInput)
    connectOrCreate?: UserCreateOrConnectWithoutCredentialsInput;

    @Field(() => UserUpsertWithoutCredentialsInput, {nullable:true})
    @Type(() => UserUpsertWithoutCredentialsInput)
    upsert?: UserUpsertWithoutCredentialsInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: UserWhereUniqueInput;

    @Field(() => UserUpdateWithoutCredentialsInput, {nullable:true})
    @Type(() => UserUpdateWithoutCredentialsInput)
    update?: UserUpdateWithoutCredentialsInput;
}
