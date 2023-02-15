import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { WorkflowsOnEventTypesUpdateInput } from './workflows-on-event-types-update.input';
import { Type } from 'class-transformer';
import { WorkflowsOnEventTypesWhereUniqueInput } from './workflows-on-event-types-where-unique.input';

@ArgsType()
export class UpdateOneWorkflowsOnEventTypesArgs {

    @Field(() => WorkflowsOnEventTypesUpdateInput, {nullable:false})
    @Type(() => WorkflowsOnEventTypesUpdateInput)
    data!: WorkflowsOnEventTypesUpdateInput;

    @Field(() => WorkflowsOnEventTypesWhereUniqueInput, {nullable:false})
    @Type(() => WorkflowsOnEventTypesWhereUniqueInput)
    where!: WorkflowsOnEventTypesWhereUniqueInput;
}
