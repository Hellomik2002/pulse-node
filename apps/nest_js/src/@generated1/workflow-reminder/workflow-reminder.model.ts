import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Booking } from '../booking/booking.model';
import { WorkflowMethods } from '../prisma/workflow-methods.enum';
import { Int } from '@nestjs/graphql';
import { WorkflowStep } from '../workflow-step/workflow-step.model';

@ObjectType()
export class WorkflowReminder {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    bookingUid!: string;

    @Field(() => Booking, {nullable:true})
    booking?: Booking | null;

    @Field(() => WorkflowMethods, {nullable:false})
    method!: keyof typeof WorkflowMethods;

    @Field(() => Date, {nullable:false})
    scheduledDate!: Date;

    @Field(() => String, {nullable:true})
    referenceId!: string | null;

    @Field(() => Boolean, {nullable:false})
    scheduled!: boolean;

    @Field(() => Int, {nullable:false})
    workflowStepId!: number;

    @Field(() => WorkflowStep, {nullable:false})
    workflowStep?: WorkflowStep;
}
