import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { WorkflowMethods } from '../prisma/workflow-methods.enum';

@ObjectType()
export class WorkflowReminderMinAggregate {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:true})
    bookingUid?: string;

    @Field(() => WorkflowMethods, {nullable:true})
    method?: keyof typeof WorkflowMethods;

    @Field(() => Date, {nullable:true})
    scheduledDate?: Date | string;

    @Field(() => String, {nullable:true})
    referenceId?: string;

    @Field(() => Boolean, {nullable:true})
    scheduled?: boolean;

    @Field(() => Int, {nullable:true})
    workflowStepId?: number;
}
