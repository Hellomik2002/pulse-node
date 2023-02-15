import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutDestinationCalendarInput } from './user-update-without-destination-calendar.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutDestinationCalendarInput } from './user-create-without-destination-calendar.input';

@InputType()
export class UserUpsertWithoutDestinationCalendarInput {

    @Field(() => UserUpdateWithoutDestinationCalendarInput, {nullable:false})
    @Type(() => UserUpdateWithoutDestinationCalendarInput)
    update!: UserUpdateWithoutDestinationCalendarInput;

    @Field(() => UserCreateWithoutDestinationCalendarInput, {nullable:false})
    @Type(() => UserCreateWithoutDestinationCalendarInput)
    create!: UserCreateWithoutDestinationCalendarInput;
}
