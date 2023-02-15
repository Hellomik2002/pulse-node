import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AttendeeWhereUniqueInput } from './attendee-where-unique.input';
import { Type } from 'class-transformer';
import { AttendeeUpdateWithoutBookingInput } from './attendee-update-without-booking.input';

@InputType()
export class AttendeeUpdateWithWhereUniqueWithoutBookingInput {

    @Field(() => AttendeeWhereUniqueInput, {nullable:false})
    @Type(() => AttendeeWhereUniqueInput)
    where!: AttendeeWhereUniqueInput;

    @Field(() => AttendeeUpdateWithoutBookingInput, {nullable:false})
    @Type(() => AttendeeUpdateWithoutBookingInput)
    data!: AttendeeUpdateWithoutBookingInput;
}
