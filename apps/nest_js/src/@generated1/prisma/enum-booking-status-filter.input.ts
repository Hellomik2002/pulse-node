import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BookingStatus } from './booking-status.enum';
import { NestedEnumBookingStatusFilter } from './nested-enum-booking-status-filter.input';

@InputType()
export class EnumBookingStatusFilter {

    @Field(() => BookingStatus, {nullable:true})
    equals?: keyof typeof BookingStatus;

    @Field(() => [BookingStatus], {nullable:true})
    in?: Array<keyof typeof BookingStatus>;

    @Field(() => [BookingStatus], {nullable:true})
    notIn?: Array<keyof typeof BookingStatus>;

    @Field(() => NestedEnumBookingStatusFilter, {nullable:true})
    not?: NestedEnumBookingStatusFilter;
}
