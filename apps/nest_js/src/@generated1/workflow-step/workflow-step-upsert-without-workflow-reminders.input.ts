import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WorkflowStepUpdateWithoutWorkflowRemindersInput } from './workflow-step-update-without-workflow-reminders.input';
import { Type } from 'class-transformer';
import { WorkflowStepCreateWithoutWorkflowRemindersInput } from './workflow-step-create-without-workflow-reminders.input';

@InputType()
export class WorkflowStepUpsertWithoutWorkflowRemindersInput {

    @Field(() => WorkflowStepUpdateWithoutWorkflowRemindersInput, {nullable:false})
    @Type(() => WorkflowStepUpdateWithoutWorkflowRemindersInput)
    update!: WorkflowStepUpdateWithoutWorkflowRemindersInput;

    @Field(() => WorkflowStepCreateWithoutWorkflowRemindersInput, {nullable:false})
    @Type(() => WorkflowStepCreateWithoutWorkflowRemindersInput)
    create!: WorkflowStepCreateWithoutWorkflowRemindersInput;
}
