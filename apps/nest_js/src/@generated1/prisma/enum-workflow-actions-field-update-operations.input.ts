import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WorkflowActions } from './workflow-actions.enum';

@InputType()
export class EnumWorkflowActionsFieldUpdateOperationsInput {

    @Field(() => WorkflowActions, {nullable:true})
    set?: keyof typeof WorkflowActions;
}
