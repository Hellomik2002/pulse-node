import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WorkflowsOnEventTypesScalarWhereInput } from './workflows-on-event-types-scalar-where.input';
import { Type } from 'class-transformer';
import { WorkflowsOnEventTypesUncheckedUpdateManyWithoutWorkflowsInput } from './workflows-on-event-types-unchecked-update-many-without-workflows.input';

@InputType()
export class WorkflowsOnEventTypesUpdateManyWithWhereWithoutEventTypeInput {

    @Field(() => WorkflowsOnEventTypesScalarWhereInput, {nullable:false})
    @Type(() => WorkflowsOnEventTypesScalarWhereInput)
    where!: WorkflowsOnEventTypesScalarWhereInput;

    @Field(() => WorkflowsOnEventTypesUncheckedUpdateManyWithoutWorkflowsInput, {nullable:false})
    @Type(() => WorkflowsOnEventTypesUncheckedUpdateManyWithoutWorkflowsInput)
    data!: WorkflowsOnEventTypesUncheckedUpdateManyWithoutWorkflowsInput;
}
