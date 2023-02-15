import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutOwnedEventTypesInput } from './user-update-without-owned-event-types.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutOwnedEventTypesInput } from './user-create-without-owned-event-types.input';

@InputType()
export class UserUpsertWithoutOwnedEventTypesInput {

    @Field(() => UserUpdateWithoutOwnedEventTypesInput, {nullable:false})
    @Type(() => UserUpdateWithoutOwnedEventTypesInput)
    update!: UserUpdateWithoutOwnedEventTypesInput;

    @Field(() => UserCreateWithoutOwnedEventTypesInput, {nullable:false})
    @Type(() => UserCreateWithoutOwnedEventTypesInput)
    create!: UserCreateWithoutOwnedEventTypesInput;
}
