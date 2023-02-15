import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WorkflowReminderCreateWithoutWorkflowStepInput } from './workflow-reminder-create-without-workflow-step.input';
import { Type } from 'class-transformer';
import { WorkflowReminderCreateOrConnectWithoutWorkflowStepInput } from './workflow-reminder-create-or-connect-without-workflow-step.input';
import { WorkflowReminderUpsertWithWhereUniqueWithoutWorkflowStepInput } from './workflow-reminder-upsert-with-where-unique-without-workflow-step.input';
import { WorkflowReminderCreateManyWorkflowStepInputEnvelope } from './workflow-reminder-create-many-workflow-step-input-envelope.input';
import { WorkflowReminderWhereUniqueInput } from './workflow-reminder-where-unique.input';
import { WorkflowReminderUpdateWithWhereUniqueWithoutWorkflowStepInput } from './workflow-reminder-update-with-where-unique-without-workflow-step.input';
import { WorkflowReminderUpdateManyWithWhereWithoutWorkflowStepInput } from './workflow-reminder-update-many-with-where-without-workflow-step.input';
import { WorkflowReminderScalarWhereInput } from './workflow-reminder-scalar-where.input';

@InputType()
export class WorkflowReminderUpdateManyWithoutWorkflowStepNestedInput {

    @Field(() => [WorkflowReminderCreateWithoutWorkflowStepInput], {nullable:true})
    @Type(() => WorkflowReminderCreateWithoutWorkflowStepInput)
    create?: Array<WorkflowReminderCreateWithoutWorkflowStepInput>;

    @Field(() => [WorkflowReminderCreateOrConnectWithoutWorkflowStepInput], {nullable:true})
    @Type(() => WorkflowReminderCreateOrConnectWithoutWorkflowStepInput)
    connectOrCreate?: Array<WorkflowReminderCreateOrConnectWithoutWorkflowStepInput>;

    @Field(() => [WorkflowReminderUpsertWithWhereUniqueWithoutWorkflowStepInput], {nullable:true})
    @Type(() => WorkflowReminderUpsertWithWhereUniqueWithoutWorkflowStepInput)
    upsert?: Array<WorkflowReminderUpsertWithWhereUniqueWithoutWorkflowStepInput>;

    @Field(() => WorkflowReminderCreateManyWorkflowStepInputEnvelope, {nullable:true})
    @Type(() => WorkflowReminderCreateManyWorkflowStepInputEnvelope)
    createMany?: WorkflowReminderCreateManyWorkflowStepInputEnvelope;

    @Field(() => [WorkflowReminderWhereUniqueInput], {nullable:true})
    @Type(() => WorkflowReminderWhereUniqueInput)
    set?: Array<WorkflowReminderWhereUniqueInput>;

    @Field(() => [WorkflowReminderWhereUniqueInput], {nullable:true})
    @Type(() => WorkflowReminderWhereUniqueInput)
    disconnect?: Array<WorkflowReminderWhereUniqueInput>;

    @Field(() => [WorkflowReminderWhereUniqueInput], {nullable:true})
    @Type(() => WorkflowReminderWhereUniqueInput)
    delete?: Array<WorkflowReminderWhereUniqueInput>;

    @Field(() => [WorkflowReminderWhereUniqueInput], {nullable:true})
    @Type(() => WorkflowReminderWhereUniqueInput)
    connect?: Array<WorkflowReminderWhereUniqueInput>;

    @Field(() => [WorkflowReminderUpdateWithWhereUniqueWithoutWorkflowStepInput], {nullable:true})
    @Type(() => WorkflowReminderUpdateWithWhereUniqueWithoutWorkflowStepInput)
    update?: Array<WorkflowReminderUpdateWithWhereUniqueWithoutWorkflowStepInput>;

    @Field(() => [WorkflowReminderUpdateManyWithWhereWithoutWorkflowStepInput], {nullable:true})
    @Type(() => WorkflowReminderUpdateManyWithWhereWithoutWorkflowStepInput)
    updateMany?: Array<WorkflowReminderUpdateManyWithWhereWithoutWorkflowStepInput>;

    @Field(() => [WorkflowReminderScalarWhereInput], {nullable:true})
    @Type(() => WorkflowReminderScalarWhereInput)
    deleteMany?: Array<WorkflowReminderScalarWhereInput>;
}
