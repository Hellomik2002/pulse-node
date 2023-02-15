import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { WorkflowReminderUpdateManyMutationInput } from './workflow-reminder-update-many-mutation.input';
import { Type } from 'class-transformer';
import { WorkflowReminderWhereInput } from './workflow-reminder-where.input';

@ArgsType()
export class UpdateManyWorkflowReminderArgs {

    @Field(() => WorkflowReminderUpdateManyMutationInput, {nullable:false})
    @Type(() => WorkflowReminderUpdateManyMutationInput)
    data!: WorkflowReminderUpdateManyMutationInput;

    @Field(() => WorkflowReminderWhereInput, {nullable:true})
    @Type(() => WorkflowReminderWhereInput)
    where?: WorkflowReminderWhereInput;
}
