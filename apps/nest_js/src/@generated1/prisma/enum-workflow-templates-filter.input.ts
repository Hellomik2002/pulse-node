import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WorkflowTemplates } from './workflow-templates.enum';
import { NestedEnumWorkflowTemplatesFilter } from './nested-enum-workflow-templates-filter.input';

@InputType()
export class EnumWorkflowTemplatesFilter {

    @Field(() => WorkflowTemplates, {nullable:true})
    equals?: keyof typeof WorkflowTemplates;

    @Field(() => [WorkflowTemplates], {nullable:true})
    in?: Array<keyof typeof WorkflowTemplates>;

    @Field(() => [WorkflowTemplates], {nullable:true})
    notIn?: Array<keyof typeof WorkflowTemplates>;

    @Field(() => NestedEnumWorkflowTemplatesFilter, {nullable:true})
    not?: NestedEnumWorkflowTemplatesFilter;
}
