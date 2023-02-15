import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BookingReferenceCreateManyBookingInput } from './booking-reference-create-many-booking.input';
import { Type } from 'class-transformer';

@InputType()
export class BookingReferenceCreateManyBookingInputEnvelope {

    @Field(() => [BookingReferenceCreateManyBookingInput], {nullable:false})
    @Type(() => BookingReferenceCreateManyBookingInput)
    data!: Array<BookingReferenceCreateManyBookingInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
