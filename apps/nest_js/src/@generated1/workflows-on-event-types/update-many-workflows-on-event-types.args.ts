import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { WorkflowsOnEventTypesUncheckedUpdateManyInput } from './workflows-on-event-types-unchecked-update-many.input';
import { Type } from 'class-transformer';
import { WorkflowsOnEventTypesWhereInput } from './workflows-on-event-types-where.input';

@ArgsType()
export class UpdateManyWorkflowsOnEventTypesArgs {

    @Field(() => WorkflowsOnEventTypesUncheckedUpdateManyInput, {nullable:false})
    @Type(() => WorkflowsOnEventTypesUncheckedUpdateManyInput)
    data!: WorkflowsOnEventTypesUncheckedUpdateManyInput;

    @Field(() => WorkflowsOnEventTypesWhereInput, {nullable:true})
    @Type(() => WorkflowsOnEventTypesWhereInput)
    where?: WorkflowsOnEventTypesWhereInput;
}
