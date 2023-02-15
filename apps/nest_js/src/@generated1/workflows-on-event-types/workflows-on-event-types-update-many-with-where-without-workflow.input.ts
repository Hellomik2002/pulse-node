import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WorkflowsOnEventTypesScalarWhereInput } from './workflows-on-event-types-scalar-where.input';
import { Type } from 'class-transformer';
import { WorkflowsOnEventTypesUncheckedUpdateManyWithoutActiveOnInput } from './workflows-on-event-types-unchecked-update-many-without-active-on.input';

@InputType()
export class WorkflowsOnEventTypesUpdateManyWithWhereWithoutWorkflowInput {

    @Field(() => WorkflowsOnEventTypesScalarWhereInput, {nullable:false})
    @Type(() => WorkflowsOnEventTypesScalarWhereInput)
    where!: WorkflowsOnEventTypesScalarWhereInput;

    @Field(() => WorkflowsOnEventTypesUncheckedUpdateManyWithoutActiveOnInput, {nullable:false})
    @Type(() => WorkflowsOnEventTypesUncheckedUpdateManyWithoutActiveOnInput)
    data!: WorkflowsOnEventTypesUncheckedUpdateManyWithoutActiveOnInput;
}
