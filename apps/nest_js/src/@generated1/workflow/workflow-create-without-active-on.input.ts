import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutWorkflowsInput } from '../user/user-create-nested-one-without-workflows.input';
import { WorkflowTriggerEvents } from './workflow-trigger-events.enum';
import { Int } from '@nestjs/graphql';
import { TimeUnit } from '../prisma/time-unit.enum';
import { WorkflowStepCreateNestedManyWithoutWorkflowInput } from '../workflow-step/workflow-step-create-nested-many-without-workflow.input';

@InputType()
export class WorkflowCreateWithoutActiveOnInput {

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => UserCreateNestedOneWithoutWorkflowsInput, {nullable:false})
    user!: UserCreateNestedOneWithoutWorkflowsInput;

    @Field(() => WorkflowTriggerEvents, {nullable:false})
    trigger!: keyof typeof WorkflowTriggerEvents;

    @Field(() => Int, {nullable:true})
    time?: number;

    @Field(() => TimeUnit, {nullable:true})
    timeUnit?: keyof typeof TimeUnit;

    @Field(() => WorkflowStepCreateNestedManyWithoutWorkflowInput, {nullable:true})
    steps?: WorkflowStepCreateNestedManyWithoutWorkflowInput;
}
