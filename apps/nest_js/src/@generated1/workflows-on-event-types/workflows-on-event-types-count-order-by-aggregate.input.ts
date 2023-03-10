import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class WorkflowsOnEventTypesCountOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    workflowId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    eventTypeId?: keyof typeof SortOrder;
}