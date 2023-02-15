import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AttendeeWhereUniqueInput } from './attendee-where-unique.input';
import { Type } from 'class-transformer';
import { AttendeeUpdateWithoutBookingInput } from './attendee-update-without-booking.input';
import { AttendeeCreateWithoutBookingInput } from './attendee-create-without-booking.input';

@InputType()
export class AttendeeUpsertWithWhereUniqueWithoutBookingInput {

    @Field(() => AttendeeWhereUniqueInput, {nullable:false})
    @Type(() => AttendeeWhereUniqueInput)
    where!: AttendeeWhereUniqueInput;

    @Field(() => AttendeeUpdateWithoutBookingInput, {nullable:false})
    @Type(() => AttendeeUpdateWithoutBookingInput)
    update!: AttendeeUpdateWithoutBookingInput;

    @Field(() => AttendeeCreateWithoutBookingInput, {nullable:false})
    @Type(() => AttendeeCreateWithoutBookingInput)
    create!: AttendeeCreateWithoutBookingInput;
}
