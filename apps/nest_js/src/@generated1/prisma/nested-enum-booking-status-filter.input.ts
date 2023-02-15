import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BookingStatus } from './booking-status.enum';

@InputType()
export class NestedEnumBookingStatusFilter {

    @Field(() => BookingStatus, {nullable:true})
    equals?: keyof typeof BookingStatus;

    @Field(() => [BookingStatus], {nullable:true})
    in?: Array<keyof typeof BookingStatus>;

    @Field(() => [BookingStatus], {nullable:true})
    notIn?: Array<keyof typeof BookingStatus>;

    @Field(() => NestedEnumBookingStatusFilter, {nullable:true})
    not?: NestedEnumBookingStatusFilter;
}
