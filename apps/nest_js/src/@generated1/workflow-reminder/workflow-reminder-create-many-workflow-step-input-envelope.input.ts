import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WorkflowReminderCreateManyWorkflowStepInput } from './workflow-reminder-create-many-workflow-step.input';
import { Type } from 'class-transformer';

@InputType()
export class WorkflowReminderCreateManyWorkflowStepInputEnvelope {

    @Field(() => [WorkflowReminderCreateManyWorkflowStepInput], {nullable:false})
    @Type(() => WorkflowReminderCreateManyWorkflowStepInput)
    data!: Array<WorkflowReminderCreateManyWorkflowStepInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
