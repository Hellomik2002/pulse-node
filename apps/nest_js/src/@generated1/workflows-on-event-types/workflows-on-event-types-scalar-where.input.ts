import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';

@InputType()
export class WorkflowsOnEventTypesScalarWhereInput {

    @Field(() => [WorkflowsOnEventTypesScalarWhereInput], {nullable:true})
    AND?: Array<WorkflowsOnEventTypesScalarWhereInput>;

    @Field(() => [WorkflowsOnEventTypesScalarWhereInput], {nullable:true})
    OR?: Array<WorkflowsOnEventTypesScalarWhereInput>;

    @Field(() => [WorkflowsOnEventTypesScalarWhereInput], {nullable:true})
    NOT?: Array<WorkflowsOnEventTypesScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    workflowId?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    eventTypeId?: IntFilter;
}
