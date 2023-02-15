import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DestinationCalendarWhereUniqueInput } from './destination-calendar-where-unique.input';
import { Type } from 'class-transformer';
import { DestinationCalendarCreateWithoutBookingInput } from './destination-calendar-create-without-booking.input';

@InputType()
export class DestinationCalendarCreateOrConnectWithoutBookingInput {

    @Field(() => DestinationCalendarWhereUniqueInput, {nullable:false})
    @Type(() => DestinationCalendarWhereUniqueInput)
    where!: DestinationCalendarWhereUniqueInput;

    @Field(() => DestinationCalendarCreateWithoutBookingInput, {nullable:false})
    @Type(() => DestinationCalendarCreateWithoutBookingInput)
    create!: DestinationCalendarCreateWithoutBookingInput;
}
