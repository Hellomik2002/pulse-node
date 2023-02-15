import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WorkflowStepCreateWithoutWorkflowRemindersInput } from './workflow-step-create-without-workflow-reminders.input';
import { Type } from 'class-transformer';
import { WorkflowStepCreateOrConnectWithoutWorkflowRemindersInput } from './workflow-step-create-or-connect-without-workflow-reminders.input';
import { WorkflowStepUpsertWithoutWorkflowRemindersInput } from './workflow-step-upsert-without-workflow-reminders.input';
import { WorkflowStepWhereUniqueInput } from './workflow-step-where-unique.input';
import { WorkflowStepUpdateWithoutWorkflowRemindersInput } from './workflow-step-update-without-workflow-reminders.input';

@InputType()
export class WorkflowStepUpdateOneRequiredWithoutWorkflowRemindersNestedInput {

    @Field(() => WorkflowStepCreateWithoutWorkflowRemindersInput, {nullable:true})
    @Type(() => WorkflowStepCreateWithoutWorkflowRemindersInput)
    create?: WorkflowStepCreateWithoutWorkflowRemindersInput;

    @Field(() => WorkflowStepCreateOrConnectWithoutWorkflowRemindersInput, {nullable:true})
    @Type(() => WorkflowStepCreateOrConnectWithoutWorkflowRemindersInput)
    connectOrCreate?: WorkflowStepCreateOrConnectWithoutWorkflowRemindersInput;

    @Field(() => WorkflowStepUpsertWithoutWorkflowRemindersInput, {nullable:true})
    @Type(() => WorkflowStepUpsertWithoutWorkflowRemindersInput)
    upsert?: WorkflowStepUpsertWithoutWorkflowRemindersInput;

    @Field(() => WorkflowStepWhereUniqueInput, {nullable:true})
    @Type(() => WorkflowStepWhereUniqueInput)
    connect?: WorkflowStepWhereUniqueInput;

    @Field(() => WorkflowStepUpdateWithoutWorkflowRemindersInput, {nullable:true})
    @Type(() => WorkflowStepUpdateWithoutWorkflowRemindersInput)
    update?: WorkflowStepUpdateWithoutWorkflowRemindersInput;
}
