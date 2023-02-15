import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WorkflowsOnEventTypesCreateManyWorkflowInput } from './workflows-on-event-types-create-many-workflow.input';
import { Type } from 'class-transformer';

@InputType()
export class WorkflowsOnEventTypesCreateManyWorkflowInputEnvelope {

    @Field(() => [WorkflowsOnEventTypesCreateManyWorkflowInput], {nullable:false})
    @Type(() => WorkflowsOnEventTypesCreateManyWorkflowInput)
    data!: Array<WorkflowsOnEventTypesCreateManyWorkflowInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
