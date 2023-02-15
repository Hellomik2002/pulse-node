import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { WorkflowReminderUpdateInput } from './workflow-reminder-update.input';
import { Type } from 'class-transformer';
import { WorkflowReminderWhereUniqueInput } from './workflow-reminder-where-unique.input';

@ArgsType()
export class UpdateOneWorkflowReminderArgs {

    @Field(() => WorkflowReminderUpdateInput, {nullable:false})
    @Type(() => WorkflowReminderUpdateInput)
    data!: WorkflowReminderUpdateInput;

    @Field(() => WorkflowReminderWhereUniqueInput, {nullable:false})
    @Type(() => WorkflowReminderWhereUniqueInput)
    where!: WorkflowReminderWhereUniqueInput;
}
