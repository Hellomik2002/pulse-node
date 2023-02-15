import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WorkflowCreateManyUserInput } from './workflow-create-many-user.input';
import { Type } from 'class-transformer';

@InputType()
export class WorkflowCreateManyUserInputEnvelope {

    @Field(() => [WorkflowCreateManyUserInput], {nullable:false})
    @Type(() => WorkflowCreateManyUserInput)
    data!: Array<WorkflowCreateManyUserInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
