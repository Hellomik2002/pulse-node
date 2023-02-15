import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { BookingOrderByWithRelationInput } from '../booking/booking-order-by-with-relation.input';

@InputType()
export class AttendeeOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    email?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    timeZone?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    locale?: keyof typeof SortOrder;

    @Field(() => BookingOrderByWithRelationInput, {nullable:true})
    booking?: BookingOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    bookingId?: keyof typeof SortOrder;
}
