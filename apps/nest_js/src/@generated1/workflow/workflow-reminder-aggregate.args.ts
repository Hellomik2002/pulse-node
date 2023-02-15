import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { WorkflowReminderWhereInput } from '../workflow-reminder/workflow-reminder-where.input';
import { Type } from 'class-transformer';
import { WorkflowReminderOrderByWithRelationInput } from '../workflow-reminder/workflow-reminder-order-by-with-relation.input';
import { WorkflowReminderWhereUniqueInput } from '../workflow-reminder/workflow-reminder-where-unique.input';
import { Int } from '@nestjs/graphql';
import { WorkflowReminderCountAggregateInput } from '../workflow-reminder/workflow-reminder-count-aggregate.input';
import { WorkflowReminderAvgAggregateInput } from '../workflow-reminder/workflow-reminder-avg-aggregate.input';
import { WorkflowReminderSumAggregateInput } from '../workflow-reminder/workflow-reminder-sum-aggregate.input';
import { WorkflowReminderMinAggregateInput } from '../workflow-reminder/workflow-reminder-min-aggregate.input';
import { WorkflowReminderMaxAggregateInput } from '../workflow-reminder/workflow-reminder-max-aggregate.input';

@ArgsType()
export class WorkflowReminderAggregateArgs {

    @Field(() => WorkflowReminderWhereInput, {nullable:true})
    @Type(() => WorkflowReminderWhereInput)
    where?: WorkflowReminderWhereInput;

    @Field(() => [WorkflowReminderOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<WorkflowReminderOrderByWithRelationInput>;

    @Field(() => WorkflowReminderWhereUniqueInput, {nullable:true})
    cursor?: WorkflowReminderWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => WorkflowReminderCountAggregateInput, {nullable:true})
    _count?: WorkflowReminderCountAggregateInput;

    @Field(() => WorkflowReminderAvgAggregateInput, {nullable:true})
    _avg?: WorkflowReminderAvgAggregateInput;

    @Field(() => WorkflowReminderSumAggregateInput, {nullable:true})
    _sum?: WorkflowReminderSumAggregateInput;

    @Field(() => WorkflowReminderMinAggregateInput, {nullable:true})
    _min?: WorkflowReminderMinAggregateInput;

    @Field(() => WorkflowReminderMaxAggregateInput, {nullable:true})
    _max?: WorkflowReminderMaxAggregateInput;
}
