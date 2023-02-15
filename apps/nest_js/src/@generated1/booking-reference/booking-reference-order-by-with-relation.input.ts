import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { BookingOrderByWithRelationInput } from '../booking/booking-order-by-with-relation.input';

@InputType()
export class BookingReferenceOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    type?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    uid?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    meetingId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    meetingPassword?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    meetingUrl?: keyof typeof SortOrder;

    @Field(() => BookingOrderByWithRelationInput, {nullable:true})
    booking?: BookingOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    bookingId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    externalCalendarId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    deleted?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    credentialId?: keyof typeof SortOrder;
}
