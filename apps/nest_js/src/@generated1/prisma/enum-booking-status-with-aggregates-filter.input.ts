import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BookingStatus } from './booking-status.enum';
import { NestedEnumBookingStatusWithAggregatesFilter } from './nested-enum-booking-status-with-aggregates-filter.input';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumBookingStatusFilter } from './nested-enum-booking-status-filter.input';

@InputType()
export class EnumBookingStatusWithAggregatesFilter {

    @Field(() => BookingStatus, {nullable:true})
    equals?: keyof typeof BookingStatus;

    @Field(() => [BookingStatus], {nullable:true})
    in?: Array<keyof typeof BookingStatus>;

    @Field(() => [BookingStatus], {nullable:true})
    notIn?: Array<keyof typeof BookingStatus>;

    @Field(() => NestedEnumBookingStatusWithAggregatesFilter, {nullable:true})
    not?: NestedEnumBookingStatusWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumBookingStatusFilter, {nullable:true})
    _min?: NestedEnumBookingStatusFilter;

    @Field(() => NestedEnumBookingStatusFilter, {nullable:true})
    _max?: NestedEnumBookingStatusFilter;
}
