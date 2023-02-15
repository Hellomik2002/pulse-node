import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WorkflowsOnEventTypesCreateWithoutEventTypeInput } from './workflows-on-event-types-create-without-event-type.input';
import { Type } from 'class-transformer';
import { WorkflowsOnEventTypesCreateOrConnectWithoutEventTypeInput } from './workflows-on-event-types-create-or-connect-without-event-type.input';
import { WorkflowsOnEventTypesCreateManyEventTypeInputEnvelope } from './workflows-on-event-types-create-many-event-type-input-envelope.input';
import { WorkflowsOnEventTypesWhereUniqueInput } from './workflows-on-event-types-where-unique.input';

@InputType()
export class WorkflowsOnEventTypesCreateNestedManyWithoutEventTypeInput {

    @Field(() => [WorkflowsOnEventTypesCreateWithoutEventTypeInput], {nullable:true})
    @Type(() => WorkflowsOnEventTypesCreateWithoutEventTypeInput)
    create?: Array<WorkflowsOnEventTypesCreateWithoutEventTypeInput>;

    @Field(() => [WorkflowsOnEventTypesCreateOrConnectWithoutEventTypeInput], {nullable:true})
    @Type(() => WorkflowsOnEventTypesCreateOrConnectWithoutEventTypeInput)
    connectOrCreate?: Array<WorkflowsOnEventTypesCreateOrConnectWithoutEventTypeInput>;

    @Field(() => WorkflowsOnEventTypesCreateManyEventTypeInputEnvelope, {nullable:true})
    @Type(() => WorkflowsOnEventTypesCreateManyEventTypeInputEnvelope)
    createMany?: WorkflowsOnEventTypesCreateManyEventTypeInputEnvelope;

    @Field(() => [WorkflowsOnEventTypesWhereUniqueInput], {nullable:true})
    @Type(() => WorkflowsOnEventTypesWhereUniqueInput)
    connect?: Array<WorkflowsOnEventTypesWhereUniqueInput>;
}
