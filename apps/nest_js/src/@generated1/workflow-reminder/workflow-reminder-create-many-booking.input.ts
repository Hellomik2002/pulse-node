import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { WorkflowMethods } from '../prisma/workflow-methods.enum';

@InputType()
export class WorkflowReminderCreateManyBookingInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => WorkflowMethods, {nullable:false})
    method!: keyof typeof WorkflowMethods;

    @Field(() => Date, {nullable:false})
    scheduledDate!: Date | string;

    @Field(() => String, {nullable:true})
    referenceId?: string;

    @Field(() => Boolean, {nullable:false})
    scheduled!: boolean;

    @Field(() => Int, {nullable:false})
    workflowStepId!: number;
}