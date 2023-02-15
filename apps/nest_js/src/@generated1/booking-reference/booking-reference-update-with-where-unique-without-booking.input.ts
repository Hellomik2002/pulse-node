import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BookingReferenceWhereUniqueInput } from './booking-reference-where-unique.input';
import { Type } from 'class-transformer';
import { BookingReferenceUpdateWithoutBookingInput } from './booking-reference-update-without-booking.input';

@InputType()
export class BookingReferenceUpdateWithWhereUniqueWithoutBookingInput {

    @Field(() => BookingReferenceWhereUniqueInput, {nullable:false})
    @Type(() => BookingReferenceWhereUniqueInput)
    where!: BookingReferenceWhereUniqueInput;

    @Field(() => BookingReferenceUpdateWithoutBookingInput, {nullable:false})
    @Type(() => BookingReferenceUpdateWithoutBookingInput)
    data!: BookingReferenceUpdateWithoutBookingInput;
}
