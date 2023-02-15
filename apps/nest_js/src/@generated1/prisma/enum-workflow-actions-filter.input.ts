import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WorkflowActions } from './workflow-actions.enum';
import { NestedEnumWorkflowActionsFilter } from './nested-enum-workflow-actions-filter.input';

@InputType()
export class EnumWorkflowActionsFilter {

    @Field(() => WorkflowActions, {nullable:true})
    equals?: keyof typeof WorkflowActions;

    @Field(() => [WorkflowActions], {nullable:true})
    in?: Array<keyof typeof WorkflowActions>;

    @Field(() => [WorkflowActions], {nullable:true})
    notIn?: Array<keyof typeof WorkflowActions>;

    @Field(() => NestedEnumWorkflowActionsFilter, {nullable:true})
    not?: NestedEnumWorkflowActionsFilter;
}
