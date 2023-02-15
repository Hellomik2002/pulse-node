import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WorkflowReminderWhereUniqueInput } from './workflow-reminder-where-unique.input';
import { Type } from 'class-transformer';
import { WorkflowReminderUpdateWithoutWorkflowStepInput } from './workflow-reminder-update-without-workflow-step.input';

@InputType()
export class WorkflowReminderUpdateWithWhereUniqueWithoutWorkflowStepInput {

    @Field(() => WorkflowReminderWhereUniqueInput, {nullable:false})
    @Type(() => WorkflowReminderWhereUniqueInput)
    where!: WorkflowReminderWhereUniqueInput;

    @Field(() => WorkflowReminderUpdateWithoutWorkflowStepInput, {nullable:false})
    @Type(() => WorkflowReminderUpdateWithoutWorkflowStepInput)
    data!: WorkflowReminderUpdateWithoutWorkflowStepInput;
}
