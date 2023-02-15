import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventTypeCreateNestedOneWithoutWorkflowsInput } from '../event-type/event-type-create-nested-one-without-workflows.input';

@InputType()
export class WorkflowsOnEventTypesCreateWithoutWorkflowInput {

    @Field(() => EventTypeCreateNestedOneWithoutWorkflowsInput, {nullable:false})
    eventType!: EventTypeCreateNestedOneWithoutWorkflowsInput;
}
