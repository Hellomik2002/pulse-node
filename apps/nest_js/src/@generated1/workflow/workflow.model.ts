import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { User } from '../user/user.model';
import { WorkflowsOnEventTypes } from '../workflows-on-event-types/workflows-on-event-types.model';
import { WorkflowTriggerEvents } from './workflow-trigger-events.enum';
import { TimeUnit } from '../prisma/time-unit.enum';
import { WorkflowStep } from '../workflow-step/workflow-step.model';
import { WorkflowCount } from './workflow-count.output';

@ObjectType()
export class Workflow {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Int, {nullable:false})
    userId!: number;

    @Field(() => User, {nullable:false})
    user?: User;

    @Field(() => [WorkflowsOnEventTypes], {nullable:true})
    activeOn?: Array<WorkflowsOnEventTypes>;

    @Field(() => WorkflowTriggerEvents, {nullable:false})
    trigger!: keyof typeof WorkflowTriggerEvents;

    @Field(() => Int, {nullable:true})
    time!: number | null;

    @Field(() => TimeUnit, {nullable:true})
    timeUnit!: keyof typeof TimeUnit | null;

    @Field(() => [WorkflowStep], {nullable:true})
    steps?: Array<WorkflowStep>;

    @Field(() => WorkflowCount, {nullable:false})
    _count?: WorkflowCount;
}
