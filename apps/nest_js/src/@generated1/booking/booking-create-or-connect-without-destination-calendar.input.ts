import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BookingWhereUniqueInput } from './booking-where-unique.input';
import { Type } from 'class-transformer';
import { BookingCreateWithoutDestinationCalendarInput } from './booking-create-without-destination-calendar.input';

@InputType()
export class BookingCreateOrConnectWithoutDestinationCalendarInput {

    @Field(() => BookingWhereUniqueInput, {nullable:false})
    @Type(() => BookingWhereUniqueInput)
    where!: BookingWhereUniqueInput;

    @Field(() => BookingCreateWithoutDestinationCalendarInput, {nullable:false})
    @Type(() => BookingCreateWithoutDestinationCalendarInput)
    create!: BookingCreateWithoutDestinationCalendarInput;
}
