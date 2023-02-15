import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BookingReferenceWhereUniqueInput } from './booking-reference-where-unique.input';
import { Type } from 'class-transformer';
import { BookingReferenceUpdateWithoutBookingInput } from './booking-reference-update-without-booking.input';
import { BookingReferenceCreateWithoutBookingInput } from './booking-reference-create-without-booking.input';

@InputType()
export class BookingReferenceUpsertWithWhereUniqueWithoutBookingInput {

    @Field(() => BookingReferenceWhereUniqueInput, {nullable:false})
    @Type(() => BookingReferenceWhereUniqueInput)
    where!: BookingReferenceWhereUniqueInput;

    @Field(() => BookingReferenceUpdateWithoutBookingInput, {nullable:false})
    @Type(() => BookingReferenceUpdateWithoutBookingInput)
    update!: BookingReferenceUpdateWithoutBookingInput;

    @Field(() => BookingReferenceCreateWithoutBookingInput, {nullable:false})
    @Type(() => BookingReferenceCreateWithoutBookingInput)
    create!: BookingReferenceCreateWithoutBookingInput;
}
