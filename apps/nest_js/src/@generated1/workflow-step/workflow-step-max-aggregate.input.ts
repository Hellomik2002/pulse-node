import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class WorkflowStepMaxAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    stepNumber?: true;

    @Field(() => Boolean, {nullable:true})
    action?: true;

    @Field(() => Boolean, {nullable:true})
    workflowId?: true;

    @Field(() => Boolean, {nullable:true})
    sendTo?: true;

    @Field(() => Boolean, {nullable:true})
    reminderBody?: true;

    @Field(() => Boolean, {nullable:true})
    emailSubject?: true;

    @Field(() => Boolean, {nullable:true})
    template?: true;

    @Field(() => Boolean, {nullable:true})
    numberRequired?: true;

    @Field(() => Boolean, {nullable:true})
    sender?: true;

    @Field(() => Boolean, {nullable:true})
    numberVerificationPending?: true;
}
