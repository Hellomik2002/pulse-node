import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';

@InputType()
export class WorkflowsOnEventTypesScalarWhereWithAggregatesInput {

    @Field(() => [WorkflowsOnEventTypesScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<WorkflowsOnEventTypesScalarWhereWithAggregatesInput>;

    @Field(() => [WorkflowsOnEventTypesScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<WorkflowsOnEventTypesScalarWhereWithAggregatesInput>;

    @Field(() => [WorkflowsOnEventTypesScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<WorkflowsOnEventTypesScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    workflowId?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    eventTypeId?: IntWithAggregatesFilter;
}
