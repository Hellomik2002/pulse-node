import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WorkflowStepWhereInput } from './workflow-step-where.input';

@InputType()
export class WorkflowStepListRelationFilter {

    @Field(() => WorkflowStepWhereInput, {nullable:true})
    every?: WorkflowStepWhereInput;

    @Field(() => WorkflowStepWhereInput, {nullable:true})
    some?: WorkflowStepWhereInput;

    @Field(() => WorkflowStepWhereInput, {nullable:true})
    none?: WorkflowStepWhereInput;
}
