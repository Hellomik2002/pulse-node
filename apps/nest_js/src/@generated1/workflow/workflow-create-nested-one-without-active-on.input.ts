import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WorkflowCreateWithoutActiveOnInput } from './workflow-create-without-active-on.input';
import { Type } from 'class-transformer';
import { WorkflowCreateOrConnectWithoutActiveOnInput } from './workflow-create-or-connect-without-active-on.input';
import { WorkflowWhereUniqueInput } from './workflow-where-unique.input';

@InputType()
export class WorkflowCreateNestedOneWithoutActiveOnInput {

    @Field(() => WorkflowCreateWithoutActiveOnInput, {nullable:true})
    @Type(() => WorkflowCreateWithoutActiveOnInput)
    create?: WorkflowCreateWithoutActiveOnInput;

    @Field(() => WorkflowCreateOrConnectWithoutActiveOnInput, {nullable:true})
    @Type(() => WorkflowCreateOrConnectWithoutActiveOnInput)
    connectOrCreate?: WorkflowCreateOrConnectWithoutActiveOnInput;

    @Field(() => WorkflowWhereUniqueInput, {nullable:true})
    @Type(() => WorkflowWhereUniqueInput)
    connect?: WorkflowWhereUniqueInput;
}
