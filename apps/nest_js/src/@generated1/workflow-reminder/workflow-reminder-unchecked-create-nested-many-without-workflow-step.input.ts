import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WorkflowReminderCreateWithoutWorkflowStepInput } from './workflow-reminder-create-without-workflow-step.input';
import { Type } from 'class-transformer';
import { WorkflowReminderCreateOrConnectWithoutWorkflowStepInput } from './workflow-reminder-create-or-connect-without-workflow-step.input';
import { WorkflowReminderCreateManyWorkflowStepInputEnvelope } from './workflow-reminder-create-many-workflow-step-input-envelope.input';
import { WorkflowReminderWhereUniqueInput } from './workflow-reminder-where-unique.input';

@InputType()
export class WorkflowReminderUncheckedCreateNestedManyWithoutWorkflowStepInput {

    @Field(() => [WorkflowReminderCreateWithoutWorkflowStepInput], {nullable:true})
    @Type(() => WorkflowReminderCreateWithoutWorkflowStepInput)
    create?: Array<WorkflowReminderCreateWithoutWorkflowStepInput>;

    @Field(() => [WorkflowReminderCreateOrConnectWithoutWorkflowStepInput], {nullable:true})
    @Type(() => WorkflowReminderCreateOrConnectWithoutWorkflowStepInput)
    connectOrCreate?: Array<WorkflowReminderCreateOrConnectWithoutWorkflowStepInput>;

    @Field(() => WorkflowReminderCreateManyWorkflowStepInputEnvelope, {nullable:true})
    @Type(() => WorkflowReminderCreateManyWorkflowStepInputEnvelope)
    createMany?: WorkflowReminderCreateManyWorkflowStepInputEnvelope;

    @Field(() => [WorkflowReminderWhereUniqueInput], {nullable:true})
    @Type(() => WorkflowReminderWhereUniqueInput)
    connect?: Array<WorkflowReminderWhereUniqueInput>;
}
