import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { UserOrderByWithRelationInput } from '../user/user-order-by-with-relation.input';
import { EventTypeOrderByWithRelationInput } from '../event-type/event-type-order-by-with-relation.input';
import { ScheduleOrderByWithRelationInput } from '../schedule/schedule-order-by-with-relation.input';

@InputType()
export class AvailabilityOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => UserOrderByWithRelationInput, {nullable:true})
    user?: UserOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;

    @Field(() => EventTypeOrderByWithRelationInput, {nullable:true})
    eventType?: EventTypeOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    eventTypeId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    days?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    startTime?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    endTime?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    date?: keyof typeof SortOrder;

    @Field(() => ScheduleOrderByWithRelationInput, {nullable:true})
    Schedule?: ScheduleOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    scheduleId?: keyof typeof SortOrder;
}
