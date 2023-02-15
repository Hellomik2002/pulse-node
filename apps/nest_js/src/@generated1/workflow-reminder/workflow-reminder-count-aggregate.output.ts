import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class WorkflowReminderCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    bookingUid!: number;

    @Field(() => Int, {nullable:false})
    method!: number;

    @Field(() => Int, {nullable:false})
    scheduledDate!: number;

    @Field(() => Int, {nullable:false})
    referenceId!: number;

    @Field(() => Int, {nullable:false})
    scheduled!: number;

    @Field(() => Int, {nullable:false})
    workflowStepId!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
