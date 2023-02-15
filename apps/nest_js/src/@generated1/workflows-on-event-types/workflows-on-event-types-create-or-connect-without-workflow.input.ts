import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WorkflowsOnEventTypesWhereUniqueInput } from './workflows-on-event-types-where-unique.input';
import { Type } from 'class-transformer';
import { WorkflowsOnEventTypesCreateWithoutWorkflowInput } from './workflows-on-event-types-create-without-workflow.input';

@InputType()
export class WorkflowsOnEventTypesCreateOrConnectWithoutWorkflowInput {

    @Field(() => WorkflowsOnEventTypesWhereUniqueInput, {nullable:false})
    @Type(() => WorkflowsOnEventTypesWhereUniqueInput)
    where!: WorkflowsOnEventTypesWhereUniqueInput;

    @Field(() => WorkflowsOnEventTypesCreateWithoutWorkflowInput, {nullable:false})
    @Type(() => WorkflowsOnEventTypesCreateWithoutWorkflowInput)
    create!: WorkflowsOnEventTypesCreateWithoutWorkflowInput;
}
