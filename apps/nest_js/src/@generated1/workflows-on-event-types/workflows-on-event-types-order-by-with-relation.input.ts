import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { WorkflowOrderByWithRelationInput } from '../workflow/workflow-order-by-with-relation.input';
import { EventTypeOrderByWithRelationInput } from '../event-type/event-type-order-by-with-relation.input';

@InputType()
export class WorkflowsOnEventTypesOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => WorkflowOrderByWithRelationInput, {nullable:true})
    workflow?: WorkflowOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    workflowId?: keyof typeof SortOrder;

    @Field(() => EventTypeOrderByWithRelationInput, {nullable:true})
    eventType?: EventTypeOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    eventTypeId?: keyof typeof SortOrder;
}
