import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WorkflowStepWhereUniqueInput } from './workflow-step-where-unique.input';
import { Type } from 'class-transformer';
import { WorkflowStepCreateWithoutWorkflowInput } from './workflow-step-create-without-workflow.input';

@InputType()
export class WorkflowStepCreateOrConnectWithoutWorkflowInput {

    @Field(() => WorkflowStepWhereUniqueInput, {nullable:false})
    @Type(() => WorkflowStepWhereUniqueInput)
    where!: WorkflowStepWhereUniqueInput;

    @Field(() => WorkflowStepCreateWithoutWorkflowInput, {nullable:false})
    @Type(() => WorkflowStepCreateWithoutWorkflowInput)
    create!: WorkflowStepCreateWithoutWorkflowInput;
}
