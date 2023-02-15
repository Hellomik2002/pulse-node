import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class EventTypeAvgOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    position?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    length?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    teamId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    periodDays?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    minimumBookingNotice?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    beforeEventBuffer?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    afterEventBuffer?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    seatsPerTimeSlot?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    scheduleId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    price?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    slotInterval?: keyof typeof SortOrder;
}
