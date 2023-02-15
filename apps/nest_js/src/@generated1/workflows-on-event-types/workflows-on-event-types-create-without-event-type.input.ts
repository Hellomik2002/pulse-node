import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WorkflowCreateNestedOneWithoutActiveOnInput } from '../workflow/workflow-create-nested-one-without-active-on.input';

@InputType()
export class WorkflowsOnEventTypesCreateWithoutEventTypeInput {

    @Field(() => WorkflowCreateNestedOneWithoutActiveOnInput, {nullable:false})
    workflow!: WorkflowCreateNestedOneWithoutActiveOnInput;
}
