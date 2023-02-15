import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { UserOrderByWithRelationInput } from '../user/user-order-by-with-relation.input';
import { WorkflowsOnEventTypesOrderByRelationAggregateInput } from '../workflows-on-event-types/workflows-on-event-types-order-by-relation-aggregate.input';
import { WorkflowStepOrderByRelationAggregateInput } from '../workflow-step/workflow-step-order-by-relation-aggregate.input';

@InputType()
export class WorkflowOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;

    @Field(() => UserOrderByWithRelationInput, {nullable:true})
    user?: UserOrderByWithRelationInput;

    @Field(() => WorkflowsOnEventTypesOrderByRelationAggregateInput, {nullable:true})
    activeOn?: WorkflowsOnEventTypesOrderByRelationAggregateInput;

    @Field(() => SortOrder, {nullable:true})
    trigger?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    time?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    timeUnit?: keyof typeof SortOrder;

    @Field(() => WorkflowStepOrderByRelationAggregateInput, {nullable:true})
    steps?: WorkflowStepOrderByRelationAggregateInput;
}
