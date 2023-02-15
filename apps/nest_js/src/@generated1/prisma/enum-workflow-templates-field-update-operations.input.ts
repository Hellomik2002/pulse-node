import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WorkflowTemplates } from './workflow-templates.enum';

@InputType()
export class EnumWorkflowTemplatesFieldUpdateOperationsInput {

    @Field(() => WorkflowTemplates, {nullable:true})
    set?: keyof typeof WorkflowTemplates;
}
