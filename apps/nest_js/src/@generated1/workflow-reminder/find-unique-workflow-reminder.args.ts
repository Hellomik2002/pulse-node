import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { WorkflowReminderWhereUniqueInput } from './workflow-reminder-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueWorkflowReminderArgs {

    @Field(() => WorkflowReminderWhereUniqueInput, {nullable:false})
    @Type(() => WorkflowReminderWhereUniqueInput)
    where!: WorkflowReminderWhereUniqueInput;
}
