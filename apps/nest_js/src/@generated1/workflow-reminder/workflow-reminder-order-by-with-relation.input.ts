import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { BookingOrderByWithRelationInput } from '../booking/booking-order-by-with-relation.input';
import { WorkflowStepOrderByWithRelationInput } from '../workflow-step/workflow-step-order-by-with-relation.input';

@InputType()
export class WorkflowReminderOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    bookingUid?: keyof typeof SortOrder;

    @Field(() => BookingOrderByWithRelationInput, {nullable:true})
    booking?: BookingOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    method?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    scheduledDate?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    referenceId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    scheduled?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    workflowStepId?: keyof typeof SortOrder;

    @Field(() => WorkflowStepOrderByWithRelationInput, {nullable:true})
    workflowStep?: WorkflowStepOrderByWithRelationInput;
}
