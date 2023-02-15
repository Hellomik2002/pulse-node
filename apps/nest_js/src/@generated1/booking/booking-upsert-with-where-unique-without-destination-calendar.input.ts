import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BookingWhereUniqueInput } from './booking-where-unique.input';
import { Type } from 'class-transformer';
import { BookingUpdateWithoutDestinationCalendarInput } from './booking-update-without-destination-calendar.input';
import { BookingCreateWithoutDestinationCalendarInput } from './booking-create-without-destination-calendar.input';

@InputType()
export class BookingUpsertWithWhereUniqueWithoutDestinationCalendarInput {

    @Field(() => BookingWhereUniqueInput, {nullable:false})
    @Type(() => BookingWhereUniqueInput)
    where!: BookingWhereUniqueInput;

    @Field(() => BookingUpdateWithoutDestinationCalendarInput, {nullable:false})
    @Type(() => BookingUpdateWithoutDestinationCalendarInput)
    update!: BookingUpdateWithoutDestinationCalendarInput;

    @Field(() => BookingCreateWithoutDestinationCalendarInput, {nullable:false})
    @Type(() => BookingCreateWithoutDestinationCalendarInput)
    create!: BookingCreateWithoutDestinationCalendarInput;
}
