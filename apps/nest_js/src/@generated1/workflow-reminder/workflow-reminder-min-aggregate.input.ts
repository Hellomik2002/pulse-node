import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class WorkflowReminderMinAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    bookingUid?: true;

    @Field(() => Boolean, {nullable:true})
    method?: true;

    @Field(() => Boolean, {nullable:true})
    scheduledDate?: true;

    @Field(() => Boolean, {nullable:true})
    referenceId?: true;

    @Field(() => Boolean, {nullable:true})
    scheduled?: true;

    @Field(() => Boolean, {nullable:true})
    workflowStepId?: true;
}
