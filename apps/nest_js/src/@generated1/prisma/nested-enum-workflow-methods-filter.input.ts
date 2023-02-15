import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WorkflowMethods } from './workflow-methods.enum';

@InputType()
export class NestedEnumWorkflowMethodsFilter {

    @Field(() => WorkflowMethods, {nullable:true})
    equals?: keyof typeof WorkflowMethods;

    @Field(() => [WorkflowMethods], {nullable:true})
    in?: Array<keyof typeof WorkflowMethods>;

    @Field(() => [WorkflowMethods], {nullable:true})
    notIn?: Array<keyof typeof WorkflowMethods>;

    @Field(() => NestedEnumWorkflowMethodsFilter, {nullable:true})
    not?: NestedEnumWorkflowMethodsFilter;
}
