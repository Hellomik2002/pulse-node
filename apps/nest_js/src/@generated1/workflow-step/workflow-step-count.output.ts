import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class WorkflowStepCount {

    @Field(() => Int, {nullable:false})
    workflowReminders?: number;
}
