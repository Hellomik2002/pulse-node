import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DestinationCalendarUpdateWithoutBookingInput } from './destination-calendar-update-without-booking.input';
import { Type } from 'class-transformer';
import { DestinationCalendarCreateWithoutBookingInput } from './destination-calendar-create-without-booking.input';

@InputType()
export class DestinationCalendarUpsertWithoutBookingInput {

    @Field(() => DestinationCalendarUpdateWithoutBookingInput, {nullable:false})
    @Type(() => DestinationCalendarUpdateWithoutBookingInput)
    update!: DestinationCalendarUpdateWithoutBookingInput;

    @Field(() => DestinationCalendarCreateWithoutBookingInput, {nullable:false})
    @Type(() => DestinationCalendarCreateWithoutBookingInput)
    create!: DestinationCalendarCreateWithoutBookingInput;
}
