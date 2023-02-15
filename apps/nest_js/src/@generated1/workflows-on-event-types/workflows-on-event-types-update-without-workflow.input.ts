import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventTypeUpdateOneRequiredWithoutWorkflowsNestedInput } from '../event-type/event-type-update-one-required-without-workflows-nested.input';

@InputType()
export class WorkflowsOnEventTypesUpdateWithoutWorkflowInput {

    @Field(() => EventTypeUpdateOneRequiredWithoutWorkflowsNestedInput, {nullable:true})
    eventType?: EventTypeUpdateOneRequiredWithoutWorkflowsNestedInput;
}
