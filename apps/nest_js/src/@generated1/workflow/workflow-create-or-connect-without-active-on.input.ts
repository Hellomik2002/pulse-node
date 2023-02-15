import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WorkflowWhereUniqueInput } from './workflow-where-unique.input';
import { Type } from 'class-transformer';
import { WorkflowCreateWithoutActiveOnInput } from './workflow-create-without-active-on.input';

@InputType()
export class WorkflowCreateOrConnectWithoutActiveOnInput {

    @Field(() => WorkflowWhereUniqueInput, {nullable:false})
    @Type(() => WorkflowWhereUniqueInput)
    where!: WorkflowWhereUniqueInput;

    @Field(() => WorkflowCreateWithoutActiveOnInput, {nullable:false})
    @Type(() => WorkflowCreateWithoutActiveOnInput)
    create!: WorkflowCreateWithoutActiveOnInput;
}
