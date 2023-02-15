import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BookingReferenceCreateWithoutBookingInput } from './booking-reference-create-without-booking.input';
import { Type } from 'class-transformer';
import { BookingReferenceCreateOrConnectWithoutBookingInput } from './booking-reference-create-or-connect-without-booking.input';
import { BookingReferenceCreateManyBookingInputEnvelope } from './booking-reference-create-many-booking-input-envelope.input';
import { BookingReferenceWhereUniqueInput } from './booking-reference-where-unique.input';

@InputType()
export class BookingReferenceCreateNestedManyWithoutBookingInput {

    @Field(() => [BookingReferenceCreateWithoutBookingInput], {nullable:true})
    @Type(() => BookingReferenceCreateWithoutBookingInput)
    create?: Array<BookingReferenceCreateWithoutBookingInput>;

    @Field(() => [BookingReferenceCreateOrConnectWithoutBookingInput], {nullable:true})
    @Type(() => BookingReferenceCreateOrConnectWithoutBookingInput)
    connectOrCreate?: Array<BookingReferenceCreateOrConnectWithoutBookingInput>;

    @Field(() => BookingReferenceCreateManyBookingInputEnvelope, {nullable:true})
    @Type(() => BookingReferenceCreateManyBookingInputEnvelope)
    createMany?: BookingReferenceCreateManyBookingInputEnvelope;

    @Field(() => [BookingReferenceWhereUniqueInput], {nullable:true})
    @Type(() => BookingReferenceWhereUniqueInput)
    connect?: Array<BookingReferenceWhereUniqueInput>;
}
