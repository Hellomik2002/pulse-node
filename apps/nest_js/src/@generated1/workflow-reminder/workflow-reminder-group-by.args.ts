import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { WorkflowReminderWhereInput } from './workflow-reminder-where.input';
import { Type } from 'class-transformer';
import { WorkflowReminderOrderByWithAggregationInput } from './workflow-reminder-order-by-with-aggregation.input';
import { WorkflowReminderScalarFieldEnum } from './workflow-reminder-scalar-field.enum';
import { WorkflowReminderScalarWhereWithAggregatesInput } from './workflow-reminder-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { WorkflowReminderCountAggregateInput } from './workflow-reminder-count-aggregate.input';
import { WorkflowReminderAvgAggregateInput } from './workflow-reminder-avg-aggregate.input';
import { WorkflowReminderSumAggregateInput } from './workflow-reminder-sum-aggregate.input';
import { WorkflowReminderMinAggregateInput } from './workflow-reminder-min-aggregate.input';
import { WorkflowReminderMaxAggregateInput } from './workflow-reminder-max-aggregate.input';

@ArgsType()
export class WorkflowReminderGroupByArgs {

    @Field(() => WorkflowReminderWhereInput, {nullable:true})
    @Type(() => WorkflowReminderWhereInput)
    where?: WorkflowReminderWhereInput;

    @Field(() => [WorkflowReminderOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<WorkflowReminderOrderByWithAggregationInput>;

    @Field(() => [WorkflowReminderScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof WorkflowReminderScalarFieldEnum>;

    @Field(() => WorkflowReminderScalarWhereWithAggregatesInput, {nullable:true})
    having?: WorkflowReminderScalarWhereWithAggregatesInput;

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
