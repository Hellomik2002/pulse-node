import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { WorkflowReminderWhereInput } from './workflow-reminder-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyWorkflowReminderArgs {

    @Field(() => WorkflowReminderWhereInput, {nullable:true})
    @Type(() => WorkflowReminderWhereInput)
    where?: WorkflowReminderWhereInput;
}
