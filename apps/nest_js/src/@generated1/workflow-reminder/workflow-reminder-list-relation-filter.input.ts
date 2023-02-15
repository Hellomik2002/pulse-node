import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WorkflowReminderWhereInput } from './workflow-reminder-where.input';

@InputType()
export class WorkflowReminderListRelationFilter {

    @Field(() => WorkflowReminderWhereInput, {nullable:true})
    every?: WorkflowReminderWhereInput;

    @Field(() => WorkflowReminderWhereInput, {nullable:true})
    some?: WorkflowReminderWhereInput;

    @Field(() => WorkflowReminderWhereInput, {nullable:true})
    none?: WorkflowReminderWhereInput;
}
