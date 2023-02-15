import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { WorkflowRelationFilter } from '../workflow/workflow-relation-filter.input';
import { EventTypeRelationFilter } from '../event-type/event-type-relation-filter.input';

@InputType()
export class WorkflowsOnEventTypesWhereInput {

    @Field(() => [WorkflowsOnEventTypesWhereInput], {nullable:true})
    AND?: Array<WorkflowsOnEventTypesWhereInput>;

    @Field(() => [WorkflowsOnEventTypesWhereInput], {nullable:true})
    OR?: Array<WorkflowsOnEventTypesWhereInput>;

    @Field(() => [WorkflowsOnEventTypesWhereInput], {nullable:true})
    NOT?: Array<WorkflowsOnEventTypesWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => WorkflowRelationFilter, {nullable:true})
    workflow?: WorkflowRelationFilter;

    @Field(() => IntFilter, {nullable:true})
    workflowId?: IntFilter;

    @Field(() => EventTypeRelationFilter, {nullable:true})
    eventType?: EventTypeRelationFilter;

    @Field(() => IntFilter, {nullable:true})
    eventTypeId?: IntFilter;
}
