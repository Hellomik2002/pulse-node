import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutDestinationCalendarInput } from './user-create-without-destination-calendar.input';

@InputType()
export class UserCreateOrConnectWithoutDestinationCalendarInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: UserWhereUniqueInput;

    @Field(() => UserCreateWithoutDestinationCalendarInput, {nullable:false})
    @Type(() => UserCreateWithoutDestinationCalendarInput)
    create!: UserCreateWithoutDestinationCalendarInput;
}
