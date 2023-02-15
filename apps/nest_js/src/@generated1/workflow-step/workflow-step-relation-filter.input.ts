import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WorkflowStepWhereInput } from './workflow-step-where.input';

@InputType()
export class WorkflowStepRelationFilter {

    @Field(() => WorkflowStepWhereInput, {nullable:true})
    is?: WorkflowStepWhereInput;

    @Field(() => WorkflowStepWhereInput, {nullable:true})
    isNot?: WorkflowStepWhereInput;
}
