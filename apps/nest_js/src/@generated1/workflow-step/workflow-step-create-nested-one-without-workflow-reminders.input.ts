import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WorkflowStepCreateWithoutWorkflowRemindersInput } from './workflow-step-create-without-workflow-reminders.input';
import { Type } from 'class-transformer';
import { WorkflowStepCreateOrConnectWithoutWorkflowRemindersInput } from './workflow-step-create-or-connect-without-workflow-reminders.input';
import { WorkflowStepWhereUniqueInput } from './workflow-step-where-unique.input';

@InputType()
export class WorkflowStepCreateNestedOneWithoutWorkflowRemindersInput {

    @Field(() => WorkflowStepCreateWithoutWorkflowRemindersInput, {nullable:true})
    @Type(() => WorkflowStepCreateWithoutWorkflowRemindersInput)
    create?: WorkflowStepCreateWithoutWorkflowRemindersInput;

    @Field(() => WorkflowStepCreateOrConnectWithoutWorkflowRemindersInput, {nullable:true})
    @Type(() => WorkflowStepCreateOrConnectWithoutWorkflowRemindersInput)
    connectOrCreate?: WorkflowStepCreateOrConnectWithoutWorkflowRemindersInput;

    @Field(() => WorkflowStepWhereUniqueInput, {nullable:true})
    @Type(() => WorkflowStepWhereUniqueInput)
    connect?: WorkflowStepWhereUniqueInput;
}
