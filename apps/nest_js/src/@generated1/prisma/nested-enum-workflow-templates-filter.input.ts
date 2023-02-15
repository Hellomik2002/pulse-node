import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WorkflowTemplates } from './workflow-templates.enum';

@InputType()
export class NestedEnumWorkflowTemplatesFilter {

    @Field(() => WorkflowTemplates, {nullable:true})
    equals?: keyof typeof WorkflowTemplates;

    @Field(() => [WorkflowTemplates], {nullable:true})
    in?: Array<keyof typeof WorkflowTemplates>;

    @Field(() => [WorkflowTemplates], {nullable:true})
    notIn?: Array<keyof typeof WorkflowTemplates>;

    @Field(() => NestedEnumWorkflowTemplatesFilter, {nullable:true})
    not?: NestedEnumWorkflowTemplatesFilter;
}
