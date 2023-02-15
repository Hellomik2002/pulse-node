import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WorkflowCreateWithoutStepsInput } from './workflow-create-without-steps.input';
import { Type } from 'class-transformer';
import { WorkflowCreateOrConnectWithoutStepsInput } from './workflow-create-or-connect-without-steps.input';
import { WorkflowUpsertWithoutStepsInput } from './workflow-upsert-without-steps.input';
import { WorkflowWhereUniqueInput } from './workflow-where-unique.input';
import { WorkflowUpdateWithoutStepsInput } from './workflow-update-without-steps.input';

@InputType()
export class WorkflowUpdateOneRequiredWithoutStepsNestedInput {

    @Field(() => WorkflowCreateWithoutStepsInput, {nullable:true})
    @Type(() => WorkflowCreateWithoutStepsInput)
    create?: WorkflowCreateWithoutStepsInput;

    @Field(() => WorkflowCreateOrConnectWithoutStepsInput, {nullable:true})
    @Type(() => WorkflowCreateOrConnectWithoutStepsInput)
    connectOrCreate?: WorkflowCreateOrConnectWithoutStepsInput;

    @Field(() => WorkflowUpsertWithoutStepsInput, {nullable:true})
    @Type(() => WorkflowUpsertWithoutStepsInput)
    upsert?: WorkflowUpsertWithoutStepsInput;

    @Field(() => WorkflowWhereUniqueInput, {nullable:true})
    @Type(() => WorkflowWhereUniqueInput)
    connect?: WorkflowWhereUniqueInput;

    @Field(() => WorkflowUpdateWithoutStepsInput, {nullable:true})
    @Type(() => WorkflowUpdateWithoutStepsInput)
    update?: WorkflowUpdateWithoutStepsInput;
}
