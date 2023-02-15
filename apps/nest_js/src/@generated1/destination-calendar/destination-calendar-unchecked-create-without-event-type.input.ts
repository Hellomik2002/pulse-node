import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { BookingUncheckedCreateNestedManyWithoutDestinationCalendarInput } from '../booking/booking-unchecked-create-nested-many-without-destination-calendar.input';

@InputType()
export class DestinationCalendarUncheckedCreateWithoutEventTypeInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    integration!: string;

    @Field(() => String, {nullable:false})
    externalId!: string;

    @Field(() => Int, {nullable:true})
    userId?: number;

    @Field(() => BookingUncheckedCreateNestedManyWithoutDestinationCalendarInput, {nullable:true})
    booking?: BookingUncheckedCreateNestedManyWithoutDestinationCalendarInput;

    @Field(() => Int, {nullable:true})
    credentialId?: number;
}
