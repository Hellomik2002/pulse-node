import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WorkflowUpdateWithoutActiveOnInput } from './workflow-update-without-active-on.input';
import { Type } from 'class-transformer';
import { WorkflowCreateWithoutActiveOnInput } from './workflow-create-without-active-on.input';

@InputType()
export class WorkflowUpsertWithoutActiveOnInput {

    @Field(() => WorkflowUpdateWithoutActiveOnInput, {nullable:false})
    @Type(() => WorkflowUpdateWithoutActiveOnInput)
    update!: WorkflowUpdateWithoutActiveOnInput;

    @Field(() => WorkflowCreateWithoutActiveOnInput, {nullable:false})
    @Type(() => WorkflowCreateWithoutActiveOnInput)
    create!: WorkflowCreateWithoutActiveOnInput;
}
