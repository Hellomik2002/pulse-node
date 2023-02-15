import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WorkflowStepWhereUniqueInput } from './workflow-step-where-unique.input';
import { Type } from 'class-transformer';
import { WorkflowStepUpdateWithoutWorkflowInput } from './workflow-step-update-without-workflow.input';
import { WorkflowStepCreateWithoutWorkflowInput } from './workflow-step-create-without-workflow.input';

@InputType()
export class WorkflowStepUpsertWithWhereUniqueWithoutWorkflowInput {

    @Field(() => WorkflowStepWhereUniqueInput, {nullable:false})
    @Type(() => WorkflowStepWhereUniqueInput)
    where!: WorkflowStepWhereUniqueInput;

    @Field(() => WorkflowStepUpdateWithoutWorkflowInput, {nullable:false})
    @Type(() => WorkflowStepUpdateWithoutWorkflowInput)
    update!: WorkflowStepUpdateWithoutWorkflowInput;

    @Field(() => WorkflowStepCreateWithoutWorkflowInput, {nullable:false})
    @Type(() => WorkflowStepCreateWithoutWorkflowInput)
    create!: WorkflowStepCreateWithoutWorkflowInput;
}
