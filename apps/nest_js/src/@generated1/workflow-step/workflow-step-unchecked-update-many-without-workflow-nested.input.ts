import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WorkflowStepCreateWithoutWorkflowInput } from './workflow-step-create-without-workflow.input';
import { Type } from 'class-transformer';
import { WorkflowStepCreateOrConnectWithoutWorkflowInput } from './workflow-step-create-or-connect-without-workflow.input';
import { WorkflowStepUpsertWithWhereUniqueWithoutWorkflowInput } from './workflow-step-upsert-with-where-unique-without-workflow.input';
import { WorkflowStepCreateManyWorkflowInputEnvelope } from './workflow-step-create-many-workflow-input-envelope.input';
import { WorkflowStepWhereUniqueInput } from './workflow-step-where-unique.input';
import { WorkflowStepUpdateWithWhereUniqueWithoutWorkflowInput } from './workflow-step-update-with-where-unique-without-workflow.input';
import { WorkflowStepUpdateManyWithWhereWithoutWorkflowInput } from './workflow-step-update-many-with-where-without-workflow.input';
import { WorkflowStepScalarWhereInput } from './workflow-step-scalar-where.input';

@InputType()
export class WorkflowStepUncheckedUpdateManyWithoutWorkflowNestedInput {

    @Field(() => [WorkflowStepCreateWithoutWorkflowInput], {nullable:true})
    @Type(() => WorkflowStepCreateWithoutWorkflowInput)
    create?: Array<WorkflowStepCreateWithoutWorkflowInput>;

    @Field(() => [WorkflowStepCreateOrConnectWithoutWorkflowInput], {nullable:true})
    @Type(() => WorkflowStepCreateOrConnectWithoutWorkflowInput)
    connectOrCreate?: Array<WorkflowStepCreateOrConnectWithoutWorkflowInput>;

    @Field(() => [WorkflowStepUpsertWithWhereUniqueWithoutWorkflowInput], {nullable:true})
    @Type(() => WorkflowStepUpsertWithWhereUniqueWithoutWorkflowInput)
    upsert?: Array<WorkflowStepUpsertWithWhereUniqueWithoutWorkflowInput>;

    @Field(() => WorkflowStepCreateManyWorkflowInputEnvelope, {nullable:true})
    @Type(() => WorkflowStepCreateManyWorkflowInputEnvelope)
    createMany?: WorkflowStepCreateManyWorkflowInputEnvelope;

    @Field(() => [WorkflowStepWhereUniqueInput], {nullable:true})
    @Type(() => WorkflowStepWhereUniqueInput)
    set?: Array<WorkflowStepWhereUniqueInput>;

    @Field(() => [WorkflowStepWhereUniqueInput], {nullable:true})
    @Type(() => WorkflowStepWhereUniqueInput)
    disconnect?: Array<WorkflowStepWhereUniqueInput>;

    @Field(() => [WorkflowStepWhereUniqueInput], {nullable:true})
    @Type(() => WorkflowStepWhereUniqueInput)
    delete?: Array<WorkflowStepWhereUniqueInput>;

    @Field(() => [WorkflowStepWhereUniqueInput], {nullable:true})
    @Type(() => WorkflowStepWhereUniqueInput)
    connect?: Array<WorkflowStepWhereUniqueInput>;

    @Field(() => [WorkflowStepUpdateWithWhereUniqueWithoutWorkflowInput], {nullable:true})
    @Type(() => WorkflowStepUpdateWithWhereUniqueWithoutWorkflowInput)
    update?: Array<WorkflowStepUpdateWithWhereUniqueWithoutWorkflowInput>;

    @Field(() => [WorkflowStepUpdateManyWithWhereWithoutWorkflowInput], {nullable:true})
    @Type(() => WorkflowStepUpdateManyWithWhereWithoutWorkflowInput)
    updateMany?: Array<WorkflowStepUpdateManyWithWhereWithoutWorkflowInput>;

    @Field(() => [WorkflowStepScalarWhereInput], {nullable:true})
    @Type(() => WorkflowStepScalarWhereInput)
    deleteMany?: Array<WorkflowStepScalarWhereInput>;
}
