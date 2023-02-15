import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WorkflowActions } from './workflow-actions.enum';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumWorkflowActionsFilter } from './nested-enum-workflow-actions-filter.input';

@InputType()
export class NestedEnumWorkflowActionsWithAggregatesFilter {

    @Field(() => WorkflowActions, {nullable:true})
    equals?: keyof typeof WorkflowActions;

    @Field(() => [WorkflowActions], {nullable:true})
    in?: Array<keyof typeof WorkflowActions>;

    @Field(() => [WorkflowActions], {nullable:true})
    notIn?: Array<keyof typeof WorkflowActions>;

    @Field(() => NestedEnumWorkflowActionsWithAggregatesFilter, {nullable:true})
    not?: NestedEnumWorkflowActionsWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumWorkflowActionsFilter, {nullable:true})
    _min?: NestedEnumWorkflowActionsFilter;

    @Field(() => NestedEnumWorkflowActionsFilter, {nullable:true})
    _max?: NestedEnumWorkflowActionsFilter;
}
