import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WorkflowsOnEventTypesWhereInput } from './workflows-on-event-types-where.input';

@InputType()
export class WorkflowsOnEventTypesListRelationFilter {

    @Field(() => WorkflowsOnEventTypesWhereInput, {nullable:true})
    every?: WorkflowsOnEventTypesWhereInput;

    @Field(() => WorkflowsOnEventTypesWhereInput, {nullable:true})
    some?: WorkflowsOnEventTypesWhereInput;

    @Field(() => WorkflowsOnEventTypesWhereInput, {nullable:true})
    none?: WorkflowsOnEventTypesWhereInput;
}
