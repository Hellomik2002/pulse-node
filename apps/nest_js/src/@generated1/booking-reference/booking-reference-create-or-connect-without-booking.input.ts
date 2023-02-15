import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BookingReferenceWhereUniqueInput } from './booking-reference-where-unique.input';
import { Type } from 'class-transformer';
import { BookingReferenceCreateWithoutBookingInput } from './booking-reference-create-without-booking.input';

@InputType()
export class BookingReferenceCreateOrConnectWithoutBookingInput {

    @Field(() => BookingReferenceWhereUniqueInput, {nullable:false})
    @Type(() => BookingReferenceWhereUniqueInput)
    where!: BookingReferenceWhereUniqueInput;

    @Field(() => BookingReferenceCreateWithoutBookingInput, {nullable:false})
    @Type(() => BookingReferenceCreateWithoutBookingInput)
    create!: BookingReferenceCreateWithoutBookingInput;
}
