import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { BookingReferenceCountOrderByAggregateInput } from './booking-reference-count-order-by-aggregate.input';
import { BookingReferenceAvgOrderByAggregateInput } from './booking-reference-avg-order-by-aggregate.input';
import { BookingReferenceMaxOrderByAggregateInput } from './booking-reference-max-order-by-aggregate.input';
import { BookingReferenceMinOrderByAggregateInput } from './booking-reference-min-order-by-aggregate.input';
import { BookingReferenceSumOrderByAggregateInput } from './booking-reference-sum-order-by-aggregate.input';

@InputType()
export class BookingReferenceOrderByWithAggregationInput {

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

    @Field(() => SortOrder, {nullable:true})
    bookingId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    externalCalendarId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    deleted?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    credentialId?: keyof typeof SortOrder;

    @Field(() => BookingReferenceCountOrderByAggregateInput, {nullable:true})
    _count?: BookingReferenceCountOrderByAggregateInput;

    @Field(() => BookingReferenceAvgOrderByAggregateInput, {nullable:true})
    _avg?: BookingReferenceAvgOrderByAggregateInput;

    @Field(() => BookingReferenceMaxOrderByAggregateInput, {nullable:true})
    _max?: BookingReferenceMaxOrderByAggregateInput;

    @Field(() => BookingReferenceMinOrderByAggregateInput, {nullable:true})
    _min?: BookingReferenceMinOrderByAggregateInput;

    @Field(() => BookingReferenceSumOrderByAggregateInput, {nullable:true})
    _sum?: BookingReferenceSumOrderByAggregateInput;
}
