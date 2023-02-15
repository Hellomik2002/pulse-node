import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WorkflowMethods } from './workflow-methods.enum';
import { NestedEnumWorkflowMethodsWithAggregatesFilter } from './nested-enum-workflow-methods-with-aggregates-filter.input';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumWorkflowMethodsFilter } from './nested-enum-workflow-methods-filter.input';

@InputType()
export class EnumWorkflowMethodsWithAggregatesFilter {

    @Field(() => WorkflowMethods, {nullable:true})
    equals?: keyof typeof WorkflowMethods;

    @Field(() => [WorkflowMethods], {nullable:true})
    in?: Array<keyof typeof WorkflowMethods>;

    @Field(() => [WorkflowMethods], {nullable:true})
    notIn?: Array<keyof typeof WorkflowMethods>;

    @Field(() => NestedEnumWorkflowMethodsWithAggregatesFilter, {nullable:true})
    not?: NestedEnumWorkflowMethodsWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumWorkflowMethodsFilter, {nullable:true})
    _min?: NestedEnumWorkflowMethodsFilter;

    @Field(() => NestedEnumWorkflowMethodsFilter, {nullable:true})
    _max?: NestedEnumWorkflowMethodsFilter;
}
