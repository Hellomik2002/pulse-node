import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WorkflowWhereInput } from './workflow-where.input';

@InputType()
export class WorkflowRelationFilter {

    @Field(() => WorkflowWhereInput, {nullable:true})
    is?: WorkflowWhereInput;

    @Field(() => WorkflowWhereInput, {nullable:true})
    isNot?: WorkflowWhereInput;
}
