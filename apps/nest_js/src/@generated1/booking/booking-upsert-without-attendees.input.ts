import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BookingUpdateWithoutAttendeesInput } from './booking-update-without-attendees.input';
import { Type } from 'class-transformer';
import { BookingCreateWithoutAttendeesInput } from './booking-create-without-attendees.input';

@InputType()
export class BookingUpsertWithoutAttendeesInput {

    @Field(() => BookingUpdateWithoutAttendeesInput, {nullable:false})
    @Type(() => BookingUpdateWithoutAttendeesInput)
    update!: BookingUpdateWithoutAttendeesInput;

    @Field(() => BookingCreateWithoutAttendeesInput, {nullable:false})
    @Type(() => BookingCreateWithoutAttendeesInput)
    create!: BookingCreateWithoutAttendeesInput;
}
