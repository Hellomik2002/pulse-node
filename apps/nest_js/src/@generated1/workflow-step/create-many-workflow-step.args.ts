import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { WorkflowStepCreateManyInput } from './workflow-step-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyWorkflowStepArgs {

    @Field(() => [WorkflowStepCreateManyInput], {nullable:false})
    @Type(() => WorkflowStepCreateManyInput)
    data!: Array<WorkflowStepCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
