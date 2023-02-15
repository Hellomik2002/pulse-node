import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WorkflowUpdateOneRequiredWithoutActiveOnNestedInput } from '../workflow/workflow-update-one-required-without-active-on-nested.input';

@InputType()
export class WorkflowsOnEventTypesUpdateWithoutEventTypeInput {

    @Field(() => WorkflowUpdateOneRequiredWithoutActiveOnNestedInput, {nullable:true})
    workflow?: WorkflowUpdateOneRequiredWithoutActiveOnNestedInput;
}
