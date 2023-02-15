import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { UserOrderByWithRelationInput } from '../user/user-order-by-with-relation.input';
import { EventTypeOrderByRelationAggregateInput } from '../event-type/event-type-order-by-relation-aggregate.input';
import { AvailabilityOrderByRelationAggregateInput } from '../availability/availability-order-by-relation-aggregate.input';

@InputType()
export class ScheduleOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => UserOrderByWithRelationInput, {nullable:true})
    user?: UserOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;

    @Field(() => EventTypeOrderByRelationAggregateInput, {nullable:true})
    eventType?: EventTypeOrderByRelationAggregateInput;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    timeZone?: keyof typeof SortOrder;

    @Field(() => AvailabilityOrderByRelationAggregateInput, {nullable:true})
    availability?: AvailabilityOrderByRelationAggregateInput;
}
