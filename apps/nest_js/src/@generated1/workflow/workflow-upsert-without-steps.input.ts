import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WorkflowUpdateWithoutStepsInput } from './workflow-update-without-steps.input';
import { Type } from 'class-transformer';
import { WorkflowCreateWithoutStepsInput } from './workflow-create-without-steps.input';

@InputType()
export class WorkflowUpsertWithoutStepsInput {

    @Field(() => WorkflowUpdateWithoutStepsInput, {nullable:false})
    @Type(() => WorkflowUpdateWithoutStepsInput)
    update!: WorkflowUpdateWithoutStepsInput;

    @Field(() => WorkflowCreateWithoutStepsInput, {nullable:false})
    @Type(() => WorkflowCreateWithoutStepsInput)
    create!: WorkflowCreateWithoutStepsInput;
}
