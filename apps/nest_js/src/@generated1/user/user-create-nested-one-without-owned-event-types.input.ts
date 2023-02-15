import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutOwnedEventTypesInput } from './user-create-without-owned-event-types.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutOwnedEventTypesInput } from './user-create-or-connect-without-owned-event-types.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutOwnedEventTypesInput {

    @Field(() => UserCreateWithoutOwnedEventTypesInput, {nullable:true})
    @Type(() => UserCreateWithoutOwnedEventTypesInput)
    create?: UserCreateWithoutOwnedEventTypesInput;

    @Field(() => UserCreateOrConnectWithoutOwnedEventTypesInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutOwnedEventTypesInput)
    connectOrCreate?: UserCreateOrConnectWithoutOwnedEventTypesInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: UserWhereUniqueInput;
}
