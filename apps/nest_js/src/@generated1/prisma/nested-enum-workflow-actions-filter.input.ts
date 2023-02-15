import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WorkflowActions } from './workflow-actions.enum';

@InputType()
export class NestedEnumWorkflowActionsFilter {

    @Field(() => WorkflowActions, {nullable:true})
    equals?: keyof typeof WorkflowActions;

    @Field(() => [WorkflowActions], {nullable:true})
    in?: Array<keyof typeof WorkflowActions>;

    @Field(() => [WorkflowActions], {nullable:true})
    notIn?: Array<keyof typeof WorkflowActions>;

    @Field(() => NestedEnumWorkflowActionsFilter, {nullable:true})
    not?: NestedEnumWorkflowActionsFilter;
}
