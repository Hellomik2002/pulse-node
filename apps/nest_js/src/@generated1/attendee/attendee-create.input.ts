import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BookingCreateNestedOneWithoutAttendeesInput } from '../booking/booking-create-nested-one-without-attendees.input';

@InputType()
export class AttendeeCreateInput {

    @Field(() => String, {nullable:false})
    email!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    timeZone!: string;

    @Field(() => String, {nullable:true})
    pulseUserId?: string;

    @Field(() => String, {nullable:true})
    locale?: string;

    @Field(() => BookingCreateNestedOneWithoutAttendeesInput, {nullable:true})
    booking?: BookingCreateNestedOneWithoutAttendeesInput;
}
