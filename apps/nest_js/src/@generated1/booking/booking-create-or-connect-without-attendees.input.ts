import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BookingWhereUniqueInput } from './booking-where-unique.input';
import { Type } from 'class-transformer';
import { BookingCreateWithoutAttendeesInput } from './booking-create-without-attendees.input';

@InputType()
export class BookingCreateOrConnectWithoutAttendeesInput {

    @Field(() => BookingWhereUniqueInput, {nullable:false})
    @Type(() => BookingWhereUniqueInput)
    where!: BookingWhereUniqueInput;

    @Field(() => BookingCreateWithoutAttendeesInput, {nullable:false})
    @Type(() => BookingCreateWithoutAttendeesInput)
    create!: BookingCreateWithoutAttendeesInput;
}
