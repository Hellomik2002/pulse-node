import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DestinationCalendarCreateWithoutBookingInput } from './destination-calendar-create-without-booking.input';
import { Type } from 'class-transformer';
import { DestinationCalendarCreateOrConnectWithoutBookingInput } from './destination-calendar-create-or-connect-without-booking.input';
import { DestinationCalendarUpsertWithoutBookingInput } from './destination-calendar-upsert-without-booking.input';
import { DestinationCalendarWhereUniqueInput } from './destination-calendar-where-unique.input';
import { DestinationCalendarUpdateWithoutBookingInput } from './destination-calendar-update-without-booking.input';

@InputType()
export class DestinationCalendarUpdateOneWithoutBookingNestedInput {

    @Field(() => DestinationCalendarCreateWithoutBookingInput, {nullable:true})
    @Type(() => DestinationCalendarCreateWithoutBookingInput)
    create?: DestinationCalendarCreateWithoutBookingInput;

    @Field(() => DestinationCalendarCreateOrConnectWithoutBookingInput, {nullable:true})
    @Type(() => DestinationCalendarCreateOrConnectWithoutBookingInput)
    connectOrCreate?: DestinationCalendarCreateOrConnectWithoutBookingInput;

    @Field(() => DestinationCalendarUpsertWithoutBookingInput, {nullable:true})
    @Type(() => DestinationCalendarUpsertWithoutBookingInput)
    upsert?: DestinationCalendarUpsertWithoutBookingInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => DestinationCalendarWhereUniqueInput, {nullable:true})
    @Type(() => DestinationCalendarWhereUniqueInput)
    connect?: DestinationCalendarWhereUniqueInput;

    @Field(() => DestinationCalendarUpdateWithoutBookingInput, {nullable:true})
    @Type(() => DestinationCalendarUpdateWithoutBookingInput)
    update?: DestinationCalendarUpdateWithoutBookingInput;
}
