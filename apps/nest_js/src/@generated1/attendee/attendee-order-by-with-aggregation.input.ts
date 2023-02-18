import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { AttendeeCountOrderByAggregateInput } from './attendee-count-order-by-aggregate.input';
import { AttendeeAvgOrderByAggregateInput } from './attendee-avg-order-by-aggregate.input';
import { AttendeeMaxOrderByAggregateInput } from './attendee-max-order-by-aggregate.input';
import { AttendeeMinOrderByAggregateInput } from './attendee-min-order-by-aggregate.input';
import { AttendeeSumOrderByAggregateInput } from './attendee-sum-order-by-aggregate.input';

@InputType()
export class AttendeeOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    email?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    timeZone?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    pulseUserId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    locale?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    bookingId?: keyof typeof SortOrder;

    @Field(() => AttendeeCountOrderByAggregateInput, {nullable:true})
    _count?: AttendeeCountOrderByAggregateInput;

    @Field(() => AttendeeAvgOrderByAggregateInput, {nullable:true})
    _avg?: AttendeeAvgOrderByAggregateInput;

    @Field(() => AttendeeMaxOrderByAggregateInput, {nullable:true})
    _max?: AttendeeMaxOrderByAggregateInput;

    @Field(() => AttendeeMinOrderByAggregateInput, {nullable:true})
    _min?: AttendeeMinOrderByAggregateInput;

    @Field(() => AttendeeSumOrderByAggregateInput, {nullable:true})
    _sum?: AttendeeSumOrderByAggregateInput;
}
