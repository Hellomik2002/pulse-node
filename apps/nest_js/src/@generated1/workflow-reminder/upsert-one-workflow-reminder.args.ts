import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { WorkflowReminderWhereUniqueInput } from './workflow-reminder-where-unique.input';
import { Type } from 'class-transformer';
import { WorkflowReminderCreateInput } from './workflow-reminder-create.input';
import { WorkflowReminderUpdateInput } from './workflow-reminder-update.input';

@ArgsType()
export class UpsertOneWorkflowReminderArgs {

    @Field(() => WorkflowReminderWhereUniqueInput, {nullable:false})
    @Type(() => WorkflowReminderWhereUniqueInput)
    where!: WorkflowReminderWhereUniqueInput;

    @Field(() => WorkflowReminderCreateInput, {nullable:false})
    @Type(() => WorkflowReminderCreateInput)
    create!: WorkflowReminderCreateInput;

    @Field(() => WorkflowReminderUpdateInput, {nullable:false})
    @Type(() => WorkflowReminderUpdateInput)
    update!: WorkflowReminderUpdateInput;
}
