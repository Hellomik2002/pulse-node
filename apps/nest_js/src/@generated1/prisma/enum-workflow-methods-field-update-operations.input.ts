import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WorkflowMethods } from './workflow-methods.enum';

@InputType()
export class EnumWorkflowMethodsFieldUpdateOperationsInput {

    @Field(() => WorkflowMethods, {nullable:true})
    set?: keyof typeof WorkflowMethods;
}
