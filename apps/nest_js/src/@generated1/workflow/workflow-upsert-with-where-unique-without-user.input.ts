import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WorkflowWhereUniqueInput } from './workflow-where-unique.input';
import { Type } from 'class-transformer';
import { WorkflowUpdateWithoutUserInput } from './workflow-update-without-user.input';
import { WorkflowCreateWithoutUserInput } from './workflow-create-without-user.input';

@InputType()
export class WorkflowUpsertWithWhereUniqueWithoutUserInput {

    @Field(() => WorkflowWhereUniqueInput, {nullable:false})
    @Type(() => WorkflowWhereUniqueInput)
    where!: WorkflowWhereUniqueInput;

    @Field(() => WorkflowUpdateWithoutUserInput, {nullable:false})
    @Type(() => WorkflowUpdateWithoutUserInput)
    update!: WorkflowUpdateWithoutUserInput;

    @Field(() => WorkflowCreateWithoutUserInput, {nullable:false})
    @Type(() => WorkflowCreateWithoutUserInput)
    create!: WorkflowCreateWithoutUserInput;
}
