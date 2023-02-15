import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WorkflowsOnEventTypesWhereUniqueInput } from './workflows-on-event-types-where-unique.input';
import { Type } from 'class-transformer';
import { WorkflowsOnEventTypesUpdateWithoutWorkflowInput } from './workflows-on-event-types-update-without-workflow.input';

@InputType()
export class WorkflowsOnEventTypesUpdateWithWhereUniqueWithoutWorkflowInput {

    @Field(() => WorkflowsOnEventTypesWhereUniqueInput, {nullable:false})
    @Type(() => WorkflowsOnEventTypesWhereUniqueInput)
    where!: WorkflowsOnEventTypesWhereUniqueInput;

    @Field(() => WorkflowsOnEventTypesUpdateWithoutWorkflowInput, {nullable:false})
    @Type(() => WorkflowsOnEventTypesUpdateWithoutWorkflowInput)
    data!: WorkflowsOnEventTypesUpdateWithoutWorkflowInput;
}
