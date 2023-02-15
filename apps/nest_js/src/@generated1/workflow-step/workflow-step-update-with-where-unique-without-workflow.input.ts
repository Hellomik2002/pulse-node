import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WorkflowStepWhereUniqueInput } from './workflow-step-where-unique.input';
import { Type } from 'class-transformer';
import { WorkflowStepUpdateWithoutWorkflowInput } from './workflow-step-update-without-workflow.input';

@InputType()
export class WorkflowStepUpdateWithWhereUniqueWithoutWorkflowInput {

    @Field(() => WorkflowStepWhereUniqueInput, {nullable:false})
    @Type(() => WorkflowStepWhereUniqueInput)
    where!: WorkflowStepWhereUniqueInput;

    @Field(() => WorkflowStepUpdateWithoutWorkflowInput, {nullable:false})
    @Type(() => WorkflowStepUpdateWithoutWorkflowInput)
    data!: WorkflowStepUpdateWithoutWorkflowInput;
}
