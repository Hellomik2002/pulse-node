import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { EnumWorkflowTriggerEventsWithAggregatesFilter } from '../prisma/enum-workflow-trigger-events-with-aggregates-filter.input';
import { IntNullableWithAggregatesFilter } from '../prisma/int-nullable-with-aggregates-filter.input';
import { EnumTimeUnitNullableWithAggregatesFilter } from '../prisma/enum-time-unit-nullable-with-aggregates-filter.input';

@InputType()
export class WorkflowScalarWhereWithAggregatesInput {

    @Field(() => [WorkflowScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<WorkflowScalarWhereWithAggregatesInput>;

    @Field(() => [WorkflowScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<WorkflowScalarWhereWithAggregatesInput>;

    @Field(() => [WorkflowScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<WorkflowScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: StringWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    userId?: IntWithAggregatesFilter;

    @Field(() => EnumWorkflowTriggerEventsWithAggregatesFilter, {nullable:true})
    trigger?: EnumWorkflowTriggerEventsWithAggregatesFilter;

    @Field(() => IntNullableWithAggregatesFilter, {nullable:true})
    time?: IntNullableWithAggregatesFilter;

    @Field(() => EnumTimeUnitNullableWithAggregatesFilter, {nullable:true})
    timeUnit?: EnumTimeUnitNullableWithAggregatesFilter;
}
