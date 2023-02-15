import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WorkflowUpdateOneRequiredWithoutActiveOnNestedInput } from '../workflow/workflow-update-one-required-without-active-on-nested.input';
import { EventTypeUpdateOneRequiredWithoutWorkflowsNestedInput } from '../event-type/event-type-update-one-required-without-workflows-nested.input';

@InputType()
export class WorkflowsOnEventTypesUpdateInput {

    @Field(() => WorkflowUpdateOneRequiredWithoutActiveOnNestedInput, {nullable:true})
    workflow?: WorkflowUpdateOneRequiredWithoutActiveOnNestedInput;

    @Field(() => EventTypeUpdateOneRequiredWithoutWorkflowsNestedInput, {nullable:true})
    eventType?: EventTypeUpdateOneRequiredWithoutWorkflowsNestedInput;
}
