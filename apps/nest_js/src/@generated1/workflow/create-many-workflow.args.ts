import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { WorkflowCreateManyInput } from './workflow-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyWorkflowArgs {

    @Field(() => [WorkflowCreateManyInput], {nullable:false})
    @Type(() => WorkflowCreateManyInput)
    data!: Array<WorkflowCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
