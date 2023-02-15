import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class WorkflowStepCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    stepNumber!: number;

    @Field(() => Int, {nullable:false})
    action!: number;

    @Field(() => Int, {nullable:false})
    workflowId!: number;

    @Field(() => Int, {nullable:false})
    sendTo!: number;

    @Field(() => Int, {nullable:false})
    reminderBody!: number;

    @Field(() => Int, {nullable:false})
    emailSubject!: number;

    @Field(() => Int, {nullable:false})
    template!: number;

    @Field(() => Int, {nullable:false})
    numberRequired!: number;

    @Field(() => Int, {nullable:false})
    sender!: number;

    @Field(() => Int, {nullable:false})
    numberVerificationPending!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
