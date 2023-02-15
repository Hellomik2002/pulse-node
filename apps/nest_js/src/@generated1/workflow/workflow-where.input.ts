import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';
import { WorkflowsOnEventTypesListRelationFilter } from '../workflows-on-event-types/workflows-on-event-types-list-relation-filter.input';
import { EnumWorkflowTriggerEventsFilter } from '../prisma/enum-workflow-trigger-events-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { EnumTimeUnitNullableFilter } from '../prisma/enum-time-unit-nullable-filter.input';
import { WorkflowStepListRelationFilter } from '../workflow-step/workflow-step-list-relation-filter.input';

@InputType()
export class WorkflowWhereInput {

    @Field(() => [WorkflowWhereInput], {nullable:true})
    AND?: Array<WorkflowWhereInput>;

    @Field(() => [WorkflowWhereInput], {nullable:true})
    OR?: Array<WorkflowWhereInput>;

    @Field(() => [WorkflowWhereInput], {nullable:true})
    NOT?: Array<WorkflowWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => IntFilter, {nullable:true})
    userId?: IntFilter;

    @Field(() => UserRelationFilter, {nullable:true})
    user?: UserRelationFilter;

    @Field(() => WorkflowsOnEventTypesListRelationFilter, {nullable:true})
    activeOn?: WorkflowsOnEventTypesListRelationFilter;

    @Field(() => EnumWorkflowTriggerEventsFilter, {nullable:true})
    trigger?: EnumWorkflowTriggerEventsFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    time?: IntNullableFilter;

    @Field(() => EnumTimeUnitNullableFilter, {nullable:true})
    timeUnit?: EnumTimeUnitNullableFilter;

    @Field(() => WorkflowStepListRelationFilter, {nullable:true})
    steps?: WorkflowStepListRelationFilter;
}
