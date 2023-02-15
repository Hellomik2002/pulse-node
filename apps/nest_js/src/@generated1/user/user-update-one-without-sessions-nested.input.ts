import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutSessionsInput } from './user-create-without-sessions.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutSessionsInput } from './user-create-or-connect-without-sessions.input';
import { UserUpsertWithoutSessionsInput } from './user-upsert-without-sessions.input';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithoutSessionsInput } from './user-update-without-sessions.input';

@InputType()
export class UserUpdateOneWithoutSessionsNestedInput {

    @Field(() => UserCreateWithoutSessionsInput, {nullable:true})
    @Type(() => UserCreateWithoutSessionsInput)
    create?: UserCreateWithoutSessionsInput;

    @Field(() => UserCreateOrConnectWithoutSessionsInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutSessionsInput)
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput;

    @Field(() => UserUpsertWithoutSessionsInput, {nullable:true})
    @Type(() => UserUpsertWithoutSessionsInput)
    upsert?: UserUpsertWithoutSessionsInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: UserWhereUniqueInput;

    @Field(() => UserUpdateWithoutSessionsInput, {nullable:true})
    @Type(() => UserUpdateWithoutSessionsInput)
    update?: UserUpdateWithoutSessionsInput;
}
