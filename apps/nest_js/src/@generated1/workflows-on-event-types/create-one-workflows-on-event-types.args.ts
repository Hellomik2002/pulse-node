import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { WorkflowsOnEventTypesCreateInput } from './workflows-on-event-types-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneWorkflowsOnEventTypesArgs {

    @Field(() => WorkflowsOnEventTypesCreateInput, {nullable:false})
    @Type(() => WorkflowsOnEventTypesCreateInput)
    data!: WorkflowsOnEventTypesCreateInput;
}
