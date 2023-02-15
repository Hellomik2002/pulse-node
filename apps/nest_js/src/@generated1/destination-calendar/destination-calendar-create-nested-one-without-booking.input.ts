import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DestinationCalendarCreateWithoutBookingInput } from './destination-calendar-create-without-booking.input';
import { Type } from 'class-transformer';
import { DestinationCalendarCreateOrConnectWithoutBookingInput } from './destination-calendar-create-or-connect-without-booking.input';
import { DestinationCalendarWhereUniqueInput } from './destination-calendar-where-unique.input';

@InputType()
export class DestinationCalendarCreateNestedOneWithoutBookingInput {

    @Field(() => DestinationCalendarCreateWithoutBookingInput, {nullable:true})
    @Type(() => DestinationCalendarCreateWithoutBookingInput)
    create?: DestinationCalendarCreateWithoutBookingInput;

    @Field(() => DestinationCalendarCreateOrConnectWithoutBookingInput, {nullable:true})
    @Type(() => DestinationCalendarCreateOrConnectWithoutBookingInput)
    connectOrCreate?: DestinationCalendarCreateOrConnectWithoutBookingInput;

    @Field(() => DestinationCalendarWhereUniqueInput, {nullable:true})
    @Type(() => DestinationCalendarWhereUniqueInput)
    connect?: DestinationCalendarWhereUniqueInput;
}
