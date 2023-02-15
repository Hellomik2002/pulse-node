import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { WorkflowsOnEventTypesWhereInput } from './workflows-on-event-types-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyWorkflowsOnEventTypesArgs {

    @Field(() => WorkflowsOnEventTypesWhereInput, {nullable:true})
    @Type(() => WorkflowsOnEventTypesWhereInput)
    where?: WorkflowsOnEventTypesWhereInput;
}
