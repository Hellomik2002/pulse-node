import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { WorkflowReminderCreateManyInput } from './workflow-reminder-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyWorkflowReminderArgs {

    @Field(() => [WorkflowReminderCreateManyInput], {nullable:false})
    @Type(() => WorkflowReminderCreateManyInput)
    data!: Array<WorkflowReminderCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
