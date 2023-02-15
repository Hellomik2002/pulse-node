import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class WorkflowsOnEventTypesMaxAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    workflowId?: true;

    @Field(() => Boolean, {nullable:true})
    eventTypeId?: true;
}
