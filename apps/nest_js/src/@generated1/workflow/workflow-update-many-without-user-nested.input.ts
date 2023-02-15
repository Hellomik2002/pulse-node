import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WorkflowCreateWithoutUserInput } from './workflow-create-without-user.input';
import { Type } from 'class-transformer';
import { WorkflowCreateOrConnectWithoutUserInput } from './workflow-create-or-connect-without-user.input';
import { WorkflowUpsertWithWhereUniqueWithoutUserInput } from './workflow-upsert-with-where-unique-without-user.input';
import { WorkflowCreateManyUserInputEnvelope } from './workflow-create-many-user-input-envelope.input';
import { WorkflowWhereUniqueInput } from './workflow-where-unique.input';
import { WorkflowUpdateWithWhereUniqueWithoutUserInput } from './workflow-update-with-where-unique-without-user.input';
import { WorkflowUpdateManyWithWhereWithoutUserInput } from './workflow-update-many-with-where-without-user.input';
import { WorkflowScalarWhereInput } from './workflow-scalar-where.input';

@InputType()
export class WorkflowUpdateManyWithoutUserNestedInput {

    @Field(() => [WorkflowCreateWithoutUserInput], {nullable:true})
    @Type(() => WorkflowCreateWithoutUserInput)
    create?: Array<WorkflowCreateWithoutUserInput>;

    @Field(() => [WorkflowCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => WorkflowCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<WorkflowCreateOrConnectWithoutUserInput>;

    @Field(() => [WorkflowUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => WorkflowUpsertWithWhereUniqueWithoutUserInput)
    upsert?: Array<WorkflowUpsertWithWhereUniqueWithoutUserInput>;

    @Field(() => WorkflowCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => WorkflowCreateManyUserInputEnvelope)
    createMany?: WorkflowCreateManyUserInputEnvelope;

    @Field(() => [WorkflowWhereUniqueInput], {nullable:true})
    @Type(() => WorkflowWhereUniqueInput)
    set?: Array<WorkflowWhereUniqueInput>;

    @Field(() => [WorkflowWhereUniqueInput], {nullable:true})
    @Type(() => WorkflowWhereUniqueInput)
    disconnect?: Array<WorkflowWhereUniqueInput>;

    @Field(() => [WorkflowWhereUniqueInput], {nullable:true})
    @Type(() => WorkflowWhereUniqueInput)
    delete?: Array<WorkflowWhereUniqueInput>;

    @Field(() => [WorkflowWhereUniqueInput], {nullable:true})
    @Type(() => WorkflowWhereUniqueInput)
    connect?: Array<WorkflowWhereUniqueInput>;

    @Field(() => [WorkflowUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => WorkflowUpdateWithWhereUniqueWithoutUserInput)
    update?: Array<WorkflowUpdateWithWhereUniqueWithoutUserInput>;

    @Field(() => [WorkflowUpdateManyWithWhereWithoutUserInput], {nullable:true})
    @Type(() => WorkflowUpdateManyWithWhereWithoutUserInput)
    updateMany?: Array<WorkflowUpdateManyWithWhereWithoutUserInput>;

    @Field(() => [WorkflowScalarWhereInput], {nullable:true})
    @Type(() => WorkflowScalarWhereInput)
    deleteMany?: Array<WorkflowScalarWhereInput>;
}
