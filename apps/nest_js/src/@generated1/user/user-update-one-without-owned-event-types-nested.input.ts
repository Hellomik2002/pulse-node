import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutOwnedEventTypesInput } from './user-create-without-owned-event-types.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutOwnedEventTypesInput } from './user-create-or-connect-without-owned-event-types.input';
import { UserUpsertWithoutOwnedEventTypesInput } from './user-upsert-without-owned-event-types.input';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithoutOwnedEventTypesInput } from './user-update-without-owned-event-types.input';

@InputType()
export class UserUpdateOneWithoutOwnedEventTypesNestedInput {

    @Field(() => UserCreateWithoutOwnedEventTypesInput, {nullable:true})
    @Type(() => UserCreateWithoutOwnedEventTypesInput)
    create?: UserCreateWithoutOwnedEventTypesInput;

    @Field(() => UserCreateOrConnectWithoutOwnedEventTypesInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutOwnedEventTypesInput)
    connectOrCreate?: UserCreateOrConnectWithoutOwnedEventTypesInput;

    @Field(() => UserUpsertWithoutOwnedEventTypesInput, {nullable:true})
    @Type(() => UserUpsertWithoutOwnedEventTypesInput)
    upsert?: UserUpsertWithoutOwnedEventTypesInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: UserWhereUniqueInput;

    @Field(() => UserUpdateWithoutOwnedEventTypesInput, {nullable:true})
    @Type(() => UserUpdateWithoutOwnedEventTypesInput)
    update?: UserUpdateWithoutOwnedEventTypesInput;
}
