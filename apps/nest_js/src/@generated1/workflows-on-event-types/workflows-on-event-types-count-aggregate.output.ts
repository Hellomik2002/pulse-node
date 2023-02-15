import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class WorkflowsOnEventTypesCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    workflowId!: number;

    @Field(() => Int, {nullable:false})
    eventTypeId!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
