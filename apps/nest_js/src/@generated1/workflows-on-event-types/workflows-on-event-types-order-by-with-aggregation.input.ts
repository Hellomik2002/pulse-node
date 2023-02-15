import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { WorkflowsOnEventTypesCountOrderByAggregateInput } from './workflows-on-event-types-count-order-by-aggregate.input';
import { WorkflowsOnEventTypesAvgOrderByAggregateInput } from './workflows-on-event-types-avg-order-by-aggregate.input';
import { WorkflowsOnEventTypesMaxOrderByAggregateInput } from './workflows-on-event-types-max-order-by-aggregate.input';
import { WorkflowsOnEventTypesMinOrderByAggregateInput } from './workflows-on-event-types-min-order-by-aggregate.input';
import { WorkflowsOnEventTypesSumOrderByAggregateInput } from './workflows-on-event-types-sum-order-by-aggregate.input';

@InputType()
export class WorkflowsOnEventTypesOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    workflowId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    eventTypeId?: keyof typeof SortOrder;

    @Field(() => WorkflowsOnEventTypesCountOrderByAggregateInput, {nullable:true})
    _count?: WorkflowsOnEventTypesCountOrderByAggregateInput;

    @Field(() => WorkflowsOnEventTypesAvgOrderByAggregateInput, {nullable:true})
    _avg?: WorkflowsOnEventTypesAvgOrderByAggregateInput;

    @Field(() => WorkflowsOnEventTypesMaxOrderByAggregateInput, {nullable:true})
    _max?: WorkflowsOnEventTypesMaxOrderByAggregateInput;

    @Field(() => WorkflowsOnEventTypesMinOrderByAggregateInput, {nullable:true})
    _min?: WorkflowsOnEventTypesMinOrderByAggregateInput;

    @Field(() => WorkflowsOnEventTypesSumOrderByAggregateInput, {nullable:true})
    _sum?: WorkflowsOnEventTypesSumOrderByAggregateInput;
}
