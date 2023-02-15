import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WorkflowWhereInput } from './workflow-where.input';

@InputType()
export class WorkflowListRelationFilter {

    @Field(() => WorkflowWhereInput, {nullable:true})
    every?: WorkflowWhereInput;

    @Field(() => WorkflowWhereInput, {nullable:true})
    some?: WorkflowWhereInput;

    @Field(() => WorkflowWhereInput, {nullable:true})
    none?: WorkflowWhereInput;
}
