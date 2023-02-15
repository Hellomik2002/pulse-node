import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutSelectedCalendarsInput } from './user-update-without-selected-calendars.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutSelectedCalendarsInput } from './user-create-without-selected-calendars.input';

@InputType()
export class UserUpsertWithoutSelectedCalendarsInput {

    @Field(() => UserUpdateWithoutSelectedCalendarsInput, {nullable:false})
    @Type(() => UserUpdateWithoutSelectedCalendarsInput)
    update!: UserUpdateWithoutSelectedCalendarsInput;

    @Field(() => UserCreateWithoutSelectedCalendarsInput, {nullable:false})
    @Type(() => UserCreateWithoutSelectedCalendarsInput)
    create!: UserCreateWithoutSelectedCalendarsInput;
}
