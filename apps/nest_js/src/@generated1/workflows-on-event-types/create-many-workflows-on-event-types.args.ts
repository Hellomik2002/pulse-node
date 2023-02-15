import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { WorkflowsOnEventTypesCreateManyInput } from './workflows-on-event-types-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyWorkflowsOnEventTypesArgs {

    @Field(() => [WorkflowsOnEventTypesCreateManyInput], {nullable:false})
    @Type(() => WorkflowsOnEventTypesCreateManyInput)
    data!: Array<WorkflowsOnEventTypesCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
