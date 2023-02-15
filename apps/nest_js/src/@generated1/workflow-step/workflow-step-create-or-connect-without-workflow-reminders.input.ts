import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WorkflowStepWhereUniqueInput } from './workflow-step-where-unique.input';
import { Type } from 'class-transformer';
import { WorkflowStepCreateWithoutWorkflowRemindersInput } from './workflow-step-create-without-workflow-reminders.input';

@InputType()
export class WorkflowStepCreateOrConnectWithoutWorkflowRemindersInput {

    @Field(() => WorkflowStepWhereUniqueInput, {nullable:false})
    @Type(() => WorkflowStepWhereUniqueInput)
    where!: WorkflowStepWhereUniqueInput;

    @Field(() => WorkflowStepCreateWithoutWorkflowRemindersInput, {nullable:false})
    @Type(() => WorkflowStepCreateWithoutWorkflowRemindersInput)
    create!: WorkflowStepCreateWithoutWorkflowRemindersInput;
}
