import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { WorkflowsOnEventTypesWhereUniqueInput } from './workflows-on-event-types-where-unique.input';
import { Type } from 'class-transformer';
import { WorkflowsOnEventTypesCreateInput } from './workflows-on-event-types-create.input';
import { WorkflowsOnEventTypesUpdateInput } from './workflows-on-event-types-update.input';

@ArgsType()
export class UpsertOneWorkflowsOnEventTypesArgs {

    @Field(() => WorkflowsOnEventTypesWhereUniqueInput, {nullable:false})
    @Type(() => WorkflowsOnEventTypesWhereUniqueInput)
    where!: WorkflowsOnEventTypesWhereUniqueInput;

    @Field(() => WorkflowsOnEventTypesCreateInput, {nullable:false})
    @Type(() => WorkflowsOnEventTypesCreateInput)
    create!: WorkflowsOnEventTypesCreateInput;

    @Field(() => WorkflowsOnEventTypesUpdateInput, {nullable:false})
    @Type(() => WorkflowsOnEventTypesUpdateInput)
    update!: WorkflowsOnEventTypesUpdateInput;
}
