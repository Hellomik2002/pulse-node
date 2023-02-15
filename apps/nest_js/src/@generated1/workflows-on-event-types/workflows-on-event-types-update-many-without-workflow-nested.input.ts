import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WorkflowsOnEventTypesCreateWithoutWorkflowInput } from './workflows-on-event-types-create-without-workflow.input';
import { Type } from 'class-transformer';
import { WorkflowsOnEventTypesCreateOrConnectWithoutWorkflowInput } from './workflows-on-event-types-create-or-connect-without-workflow.input';
import { WorkflowsOnEventTypesUpsertWithWhereUniqueWithoutWorkflowInput } from './workflows-on-event-types-upsert-with-where-unique-without-workflow.input';
import { WorkflowsOnEventTypesCreateManyWorkflowInputEnvelope } from './workflows-on-event-types-create-many-workflow-input-envelope.input';
import { WorkflowsOnEventTypesWhereUniqueInput } from './workflows-on-event-types-where-unique.input';
import { WorkflowsOnEventTypesUpdateWithWhereUniqueWithoutWorkflowInput } from './workflows-on-event-types-update-with-where-unique-without-workflow.input';
import { WorkflowsOnEventTypesUpdateManyWithWhereWithoutWorkflowInput } from './workflows-on-event-types-update-many-with-where-without-workflow.input';
import { WorkflowsOnEventTypesScalarWhereInput } from './workflows-on-event-types-scalar-where.input';

@InputType()
export class WorkflowsOnEventTypesUpdateManyWithoutWorkflowNestedInput {

    @Field(() => [WorkflowsOnEventTypesCreateWithoutWorkflowInput], {nullable:true})
    @Type(() => WorkflowsOnEventTypesCreateWithoutWorkflowInput)
    create?: Array<WorkflowsOnEventTypesCreateWithoutWorkflowInput>;

    @Field(() => [WorkflowsOnEventTypesCreateOrConnectWithoutWorkflowInput], {nullable:true})
    @Type(() => WorkflowsOnEventTypesCreateOrConnectWithoutWorkflowInput)
    connectOrCreate?: Array<WorkflowsOnEventTypesCreateOrConnectWithoutWorkflowInput>;

    @Field(() => [WorkflowsOnEventTypesUpsertWithWhereUniqueWithoutWorkflowInput], {nullable:true})
    @Type(() => WorkflowsOnEventTypesUpsertWithWhereUniqueWithoutWorkflowInput)
    upsert?: Array<WorkflowsOnEventTypesUpsertWithWhereUniqueWithoutWorkflowInput>;

    @Field(() => WorkflowsOnEventTypesCreateManyWorkflowInputEnvelope, {nullable:true})
    @Type(() => WorkflowsOnEventTypesCreateManyWorkflowInputEnvelope)
    createMany?: WorkflowsOnEventTypesCreateManyWorkflowInputEnvelope;

    @Field(() => [WorkflowsOnEventTypesWhereUniqueInput], {nullable:true})
    @Type(() => WorkflowsOnEventTypesWhereUniqueInput)
    set?: Array<WorkflowsOnEventTypesWhereUniqueInput>;

    @Field(() => [WorkflowsOnEventTypesWhereUniqueInput], {nullable:true})
    @Type(() => WorkflowsOnEventTypesWhereUniqueInput)
    disconnect?: Array<WorkflowsOnEventTypesWhereUniqueInput>;

    @Field(() => [WorkflowsOnEventTypesWhereUniqueInput], {nullable:true})
    @Type(() => WorkflowsOnEventTypesWhereUniqueInput)
    delete?: Array<WorkflowsOnEventTypesWhereUniqueInput>;

    @Field(() => [WorkflowsOnEventTypesWhereUniqueInput], {nullable:true})
    @Type(() => WorkflowsOnEventTypesWhereUniqueInput)
    connect?: Array<WorkflowsOnEventTypesWhereUniqueInput>;

    @Field(() => [WorkflowsOnEventTypesUpdateWithWhereUniqueWithoutWorkflowInput], {nullable:true})
    @Type(() => WorkflowsOnEventTypesUpdateWithWhereUniqueWithoutWorkflowInput)
    update?: Array<WorkflowsOnEventTypesUpdateWithWhereUniqueWithoutWorkflowInput>;

    @Field(() => [WorkflowsOnEventTypesUpdateManyWithWhereWithoutWorkflowInput], {nullable:true})
    @Type(() => WorkflowsOnEventTypesUpdateManyWithWhereWithoutWorkflowInput)
    updateMany?: Array<WorkflowsOnEventTypesUpdateManyWithWhereWithoutWorkflowInput>;

    @Field(() => [WorkflowsOnEventTypesScalarWhereInput], {nullable:true})
    @Type(() => WorkflowsOnEventTypesScalarWhereInput)
    deleteMany?: Array<WorkflowsOnEventTypesScalarWhereInput>;
}
