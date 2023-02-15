import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class WorkflowStepMinOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    stepNumber?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    action?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    workflowId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    sendTo?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    reminderBody?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    emailSubject?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    template?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    numberRequired?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    sender?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    numberVerificationPending?: keyof typeof SortOrder;
}
