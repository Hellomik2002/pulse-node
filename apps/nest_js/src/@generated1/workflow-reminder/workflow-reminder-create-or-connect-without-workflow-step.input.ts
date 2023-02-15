import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WorkflowReminderWhereUniqueInput } from './workflow-reminder-where-unique.input';
import { Type } from 'class-transformer';
import { WorkflowReminderCreateWithoutWorkflowStepInput } from './workflow-reminder-create-without-workflow-step.input';

@InputType()
export class WorkflowReminderCreateOrConnectWithoutWorkflowStepInput {

    @Field(() => WorkflowReminderWhereUniqueInput, {nullable:false})
    @Type(() => WorkflowReminderWhereUniqueInput)
    where!: WorkflowReminderWhereUniqueInput;

    @Field(() => WorkflowReminderCreateWithoutWorkflowStepInput, {nullable:false})
    @Type(() => WorkflowReminderCreateWithoutWorkflowStepInput)
    create!: WorkflowReminderCreateWithoutWorkflowStepInput;
}
