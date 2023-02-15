import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WorkflowCreateNestedOneWithoutActiveOnInput } from '../workflow/workflow-create-nested-one-without-active-on.input';
import { EventTypeCreateNestedOneWithoutWorkflowsInput } from '../event-type/event-type-create-nested-one-without-workflows.input';

@InputType()
export class WorkflowsOnEventTypesCreateInput {

    @Field(() => WorkflowCreateNestedOneWithoutActiveOnInput, {nullable:false})
    workflow!: WorkflowCreateNestedOneWithoutActiveOnInput;

    @Field(() => EventTypeCreateNestedOneWithoutWorkflowsInput, {nullable:false})
    eventType!: EventTypeCreateNestedOneWithoutWorkflowsInput;
}
