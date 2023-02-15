import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WorkflowsOnEventTypesCreateWithoutEventTypeInput } from './workflows-on-event-types-create-without-event-type.input';
import { Type } from 'class-transformer';
import { WorkflowsOnEventTypesCreateOrConnectWithoutEventTypeInput } from './workflows-on-event-types-create-or-connect-without-event-type.input';
import { WorkflowsOnEventTypesUpsertWithWhereUniqueWithoutEventTypeInput } from './workflows-on-event-types-upsert-with-where-unique-without-event-type.input';
import { WorkflowsOnEventTypesCreateManyEventTypeInputEnvelope } from './workflows-on-event-types-create-many-event-type-input-envelope.input';
import { WorkflowsOnEventTypesWhereUniqueInput } from './workflows-on-event-types-where-unique.input';
import { WorkflowsOnEventTypesUpdateWithWhereUniqueWithoutEventTypeInput } from './workflows-on-event-types-update-with-where-unique-without-event-type.input';
import { WorkflowsOnEventTypesUpdateManyWithWhereWithoutEventTypeInput } from './workflows-on-event-types-update-many-with-where-without-event-type.input';
import { WorkflowsOnEventTypesScalarWhereInput } from './workflows-on-event-types-scalar-where.input';

@InputType()
export class WorkflowsOnEventTypesUpdateManyWithoutEventTypeNestedInput {

    @Field(() => [WorkflowsOnEventTypesCreateWithoutEventTypeInput], {nullable:true})
    @Type(() => WorkflowsOnEventTypesCreateWithoutEventTypeInput)
    create?: Array<WorkflowsOnEventTypesCreateWithoutEventTypeInput>;

    @Field(() => [WorkflowsOnEventTypesCreateOrConnectWithoutEventTypeInput], {nullable:true})
    @Type(() => WorkflowsOnEventTypesCreateOrConnectWithoutEventTypeInput)
    connectOrCreate?: Array<WorkflowsOnEventTypesCreateOrConnectWithoutEventTypeInput>;

    @Field(() => [WorkflowsOnEventTypesUpsertWithWhereUniqueWithoutEventTypeInput], {nullable:true})
    @Type(() => WorkflowsOnEventTypesUpsertWithWhereUniqueWithoutEventTypeInput)
    upsert?: Array<WorkflowsOnEventTypesUpsertWithWhereUniqueWithoutEventTypeInput>;

    @Field(() => WorkflowsOnEventTypesCreateManyEventTypeInputEnvelope, {nullable:true})
    @Type(() => WorkflowsOnEventTypesCreateManyEventTypeInputEnvelope)
    createMany?: WorkflowsOnEventTypesCreateManyEventTypeInputEnvelope;

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

    @Field(() => [WorkflowsOnEventTypesUpdateWithWhereUniqueWithoutEventTypeInput], {nullable:true})
    @Type(() => WorkflowsOnEventTypesUpdateWithWhereUniqueWithoutEventTypeInput)
    update?: Array<WorkflowsOnEventTypesUpdateWithWhereUniqueWithoutEventTypeInput>;

    @Field(() => [WorkflowsOnEventTypesUpdateManyWithWhereWithoutEventTypeInput], {nullable:true})
    @Type(() => WorkflowsOnEventTypesUpdateManyWithWhereWithoutEventTypeInput)
    updateMany?: Array<WorkflowsOnEventTypesUpdateManyWithWhereWithoutEventTypeInput>;

    @Field(() => [WorkflowsOnEventTypesScalarWhereInput], {nullable:true})
    @Type(() => WorkflowsOnEventTypesScalarWhereInput)
    deleteMany?: Array<WorkflowsOnEventTypesScalarWhereInput>;
}
