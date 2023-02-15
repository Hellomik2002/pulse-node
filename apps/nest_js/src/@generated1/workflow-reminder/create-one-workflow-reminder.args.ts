import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { WorkflowReminderCreateInput } from './workflow-reminder-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneWorkflowReminderArgs {

    @Field(() => WorkflowReminderCreateInput, {nullable:false})
    @Type(() => WorkflowReminderCreateInput)
    data!: WorkflowReminderCreateInput;
}
