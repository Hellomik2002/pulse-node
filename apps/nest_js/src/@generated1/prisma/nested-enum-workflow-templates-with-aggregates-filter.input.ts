import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WorkflowTemplates } from './workflow-templates.enum';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumWorkflowTemplatesFilter } from './nested-enum-workflow-templates-filter.input';

@InputType()
export class NestedEnumWorkflowTemplatesWithAggregatesFilter {

    @Field(() => WorkflowTemplates, {nullable:true})
    equals?: keyof typeof WorkflowTemplates;

    @Field(() => [WorkflowTemplates], {nullable:true})
    in?: Array<keyof typeof WorkflowTemplates>;

    @Field(() => [WorkflowTemplates], {nullable:true})
    notIn?: Array<keyof typeof WorkflowTemplates>;

    @Field(() => NestedEnumWorkflowTemplatesWithAggregatesFilter, {nullable:true})
    not?: NestedEnumWorkflowTemplatesWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumWorkflowTemplatesFilter, {nullable:true})
    _min?: NestedEnumWorkflowTemplatesFilter;

    @Field(() => NestedEnumWorkflowTemplatesFilter, {nullable:true})
    _max?: NestedEnumWorkflowTemplatesFilter;
}
