import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Workflow } from '../workflow/workflow.model';
import { Int } from '@nestjs/graphql';
import { EventType } from '../event-type/event-type.model';

@ObjectType()
export class WorkflowsOnEventTypes {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => Workflow, {nullable:false})
    workflow?: Workflow;

    @Field(() => Int, {nullable:false})
    workflowId!: number;

    @Field(() => EventType, {nullable:false})
    eventType?: EventType;

    @Field(() => Int, {nullable:false})
    eventTypeId!: number;
}
