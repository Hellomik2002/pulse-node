import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutOwnedEventTypesInput } from './user-create-without-owned-event-types.input';

@InputType()
export class UserCreateOrConnectWithoutOwnedEventTypesInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: UserWhereUniqueInput;

    @Field(() => UserCreateWithoutOwnedEventTypesInput, {nullable:false})
    @Type(() => UserCreateWithoutOwnedEventTypesInput)
    create!: UserCreateWithoutOwnedEventTypesInput;
}
