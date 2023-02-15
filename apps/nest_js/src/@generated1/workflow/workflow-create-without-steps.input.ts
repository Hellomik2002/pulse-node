import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutWorkflowsInput } from '../user/user-create-nested-one-without-workflows.input';
import { WorkflowsOnEventTypesCreateNestedManyWithoutWorkflowInput } from '../workflows-on-event-types/workflows-on-event-types-create-nested-many-without-workflow.input';
import { WorkflowTriggerEvents } from './workflow-trigger-events.enum';
import { Int } from '@nestjs/graphql';
import { TimeUnit } from '../prisma/time-unit.enum';

@InputType()
export class WorkflowCreateWithoutStepsInput {

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => UserCreateNestedOneWithoutWorkflowsInput, {nullable:false})
    user!: UserCreateNestedOneWithoutWorkflowsInput;

    @Field(() => WorkflowsOnEventTypesCreateNestedManyWithoutWorkflowInput, {nullable:true})
    activeOn?: WorkflowsOnEventTypesCreateNestedManyWithoutWorkflowInput;

    @Field(() => WorkflowTriggerEvents, {nullable:false})
    trigger!: keyof typeof WorkflowTriggerEvents;

    @Field(() => Int, {nullable:true})
    time?: number;

    @Field(() => TimeUnit, {nullable:true})
    timeUnit?: keyof typeof TimeUnit;
}
