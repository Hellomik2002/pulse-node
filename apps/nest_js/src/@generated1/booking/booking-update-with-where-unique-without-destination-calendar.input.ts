import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BookingWhereUniqueInput } from './booking-where-unique.input';
import { Type } from 'class-transformer';
import { BookingUpdateWithoutDestinationCalendarInput } from './booking-update-without-destination-calendar.input';

@InputType()
export class BookingUpdateWithWhereUniqueWithoutDestinationCalendarInput {

    @Field(() => BookingWhereUniqueInput, {nullable:false})
    @Type(() => BookingWhereUniqueInput)
    where!: BookingWhereUniqueInput;

    @Field(() => BookingUpdateWithoutDestinationCalendarInput, {nullable:false})
    @Type(() => BookingUpdateWithoutDestinationCalendarInput)
    data!: BookingUpdateWithoutDestinationCalendarInput;
}
