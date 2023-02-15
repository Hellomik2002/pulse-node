import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { WorkflowTriggerEvents } from './workflow-trigger-events.enum';
import { TimeUnit } from '../prisma/time-unit.enum';
import { WorkflowStepUncheckedCreateNestedManyWithoutWorkflowInput } from '../workflow-step/workflow-step-unchecked-create-nested-many-without-workflow.input';

@InputType()
export class WorkflowUncheckedCreateWithoutActiveOnInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Int, {nullable:false})
    userId!: number;

    @Field(() => WorkflowTriggerEvents, {nullable:false})
    trigger!: keyof typeof WorkflowTriggerEvents;

    @Field(() => Int, {nullable:true})
    time?: number;

    @Field(() => TimeUnit, {nullable:true})
    timeUnit?: keyof typeof TimeUnit;

    @Field(() => WorkflowStepUncheckedCreateNestedManyWithoutWorkflowInput, {nullable:true})
    steps?: WorkflowStepUncheckedCreateNestedManyWithoutWorkflowInput;
}
