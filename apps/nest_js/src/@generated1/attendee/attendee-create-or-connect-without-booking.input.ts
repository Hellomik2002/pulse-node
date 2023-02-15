import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AttendeeWhereUniqueInput } from './attendee-where-unique.input';
import { Type } from 'class-transformer';
import { AttendeeCreateWithoutBookingInput } from './attendee-create-without-booking.input';

@InputType()
export class AttendeeCreateOrConnectWithoutBookingInput {

    @Field(() => AttendeeWhereUniqueInput, {nullable:false})
    @Type(() => AttendeeWhereUniqueInput)
    where!: AttendeeWhereUniqueInput;

    @Field(() => AttendeeCreateWithoutBookingInput, {nullable:false})
    @Type(() => AttendeeCreateWithoutBookingInput)
    create!: AttendeeCreateWithoutBookingInput;
}
