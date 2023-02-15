import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WorkflowCreateWithoutActiveOnInput } from './workflow-create-without-active-on.input';
import { Type } from 'class-transformer';
import { WorkflowCreateOrConnectWithoutActiveOnInput } from './workflow-create-or-connect-without-active-on.input';
import { WorkflowUpsertWithoutActiveOnInput } from './workflow-upsert-without-active-on.input';
import { WorkflowWhereUniqueInput } from './workflow-where-unique.input';
import { WorkflowUpdateWithoutActiveOnInput } from './workflow-update-without-active-on.input';

@InputType()
export class WorkflowUpdateOneRequiredWithoutActiveOnNestedInput {

    @Field(() => WorkflowCreateWithoutActiveOnInput, {nullable:true})
    @Type(() => WorkflowCreateWithoutActiveOnInput)
    create?: WorkflowCreateWithoutActiveOnInput;

    @Field(() => WorkflowCreateOrConnectWithoutActiveOnInput, {nullable:true})
    @Type(() => WorkflowCreateOrConnectWithoutActiveOnInput)
    connectOrCreate?: WorkflowCreateOrConnectWithoutActiveOnInput;

    @Field(() => WorkflowUpsertWithoutActiveOnInput, {nullable:true})
    @Type(() => WorkflowUpsertWithoutActiveOnInput)
    upsert?: WorkflowUpsertWithoutActiveOnInput;

    @Field(() => WorkflowWhereUniqueInput, {nullable:true})
    @Type(() => WorkflowWhereUniqueInput)
    connect?: WorkflowWhereUniqueInput;

    @Field(() => WorkflowUpdateWithoutActiveOnInput, {nullable:true})
    @Type(() => WorkflowUpdateWithoutActiveOnInput)
    update?: WorkflowUpdateWithoutActiveOnInput;
}
