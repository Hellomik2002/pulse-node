import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WorkflowCreateWithoutUserInput } from './workflow-create-without-user.input';
import { Type } from 'class-transformer';
import { WorkflowCreateOrConnectWithoutUserInput } from './workflow-create-or-connect-without-user.input';
import { WorkflowCreateManyUserInputEnvelope } from './workflow-create-many-user-input-envelope.input';
import { WorkflowWhereUniqueInput } from './workflow-where-unique.input';

@InputType()
export class WorkflowUncheckedCreateNestedManyWithoutUserInput {

    @Field(() => [WorkflowCreateWithoutUserInput], {nullable:true})
    @Type(() => WorkflowCreateWithoutUserInput)
    create?: Array<WorkflowCreateWithoutUserInput>;

    @Field(() => [WorkflowCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => WorkflowCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<WorkflowCreateOrConnectWithoutUserInput>;

    @Field(() => WorkflowCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => WorkflowCreateManyUserInputEnvelope)
    createMany?: WorkflowCreateManyUserInputEnvelope;

    @Field(() => [WorkflowWhereUniqueInput], {nullable:true})
    @Type(() => WorkflowWhereUniqueInput)
    connect?: Array<WorkflowWhereUniqueInput>;
}
