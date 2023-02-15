import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WorkflowsOnEventTypesCreateWithoutWorkflowInput } from './workflows-on-event-types-create-without-workflow.input';
import { Type } from 'class-transformer';
import { WorkflowsOnEventTypesCreateOrConnectWithoutWorkflowInput } from './workflows-on-event-types-create-or-connect-without-workflow.input';
import { WorkflowsOnEventTypesCreateManyWorkflowInputEnvelope } from './workflows-on-event-types-create-many-workflow-input-envelope.input';
import { WorkflowsOnEventTypesWhereUniqueInput } from './workflows-on-event-types-where-unique.input';

@InputType()
export class WorkflowsOnEventTypesUncheckedCreateNestedManyWithoutWorkflowInput {

    @Field(() => [WorkflowsOnEventTypesCreateWithoutWorkflowInput], {nullable:true})
    @Type(() => WorkflowsOnEventTypesCreateWithoutWorkflowInput)
    create?: Array<WorkflowsOnEventTypesCreateWithoutWorkflowInput>;

    @Field(() => [WorkflowsOnEventTypesCreateOrConnectWithoutWorkflowInput], {nullable:true})
    @Type(() => WorkflowsOnEventTypesCreateOrConnectWithoutWorkflowInput)
    connectOrCreate?: Array<WorkflowsOnEventTypesCreateOrConnectWithoutWorkflowInput>;

    @Field(() => WorkflowsOnEventTypesCreateManyWorkflowInputEnvelope, {nullable:true})
    @Type(() => WorkflowsOnEventTypesCreateManyWorkflowInputEnvelope)
    createMany?: WorkflowsOnEventTypesCreateManyWorkflowInputEnvelope;

    @Field(() => [WorkflowsOnEventTypesWhereUniqueInput], {nullable:true})
    @Type(() => WorkflowsOnEventTypesWhereUniqueInput)
    connect?: Array<WorkflowsOnEventTypesWhereUniqueInput>;
}
