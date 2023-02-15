import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { WorkflowsOnEventTypesWhereInput } from './workflows-on-event-types-where.input';
import { Type } from 'class-transformer';
import { WorkflowsOnEventTypesOrderByWithAggregationInput } from './workflows-on-event-types-order-by-with-aggregation.input';
import { WorkflowsOnEventTypesScalarFieldEnum } from './workflows-on-event-types-scalar-field.enum';
import { WorkflowsOnEventTypesScalarWhereWithAggregatesInput } from './workflows-on-event-types-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { WorkflowsOnEventTypesCountAggregateInput } from './workflows-on-event-types-count-aggregate.input';
import { WorkflowsOnEventTypesAvgAggregateInput } from './workflows-on-event-types-avg-aggregate.input';
import { WorkflowsOnEventTypesSumAggregateInput } from './workflows-on-event-types-sum-aggregate.input';
import { WorkflowsOnEventTypesMinAggregateInput } from './workflows-on-event-types-min-aggregate.input';
import { WorkflowsOnEventTypesMaxAggregateInput } from './workflows-on-event-types-max-aggregate.input';

@ArgsType()
export class WorkflowsOnEventTypesGroupByArgs {

    @Field(() => WorkflowsOnEventTypesWhereInput, {nullable:true})
    @Type(() => WorkflowsOnEventTypesWhereInput)
    where?: WorkflowsOnEventTypesWhereInput;

    @Field(() => [WorkflowsOnEventTypesOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<WorkflowsOnEventTypesOrderByWithAggregationInput>;

    @Field(() => [WorkflowsOnEventTypesScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof WorkflowsOnEventTypesScalarFieldEnum>;

    @Field(() => WorkflowsOnEventTypesScalarWhereWithAggregatesInput, {nullable:true})
    having?: WorkflowsOnEventTypesScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => WorkflowsOnEventTypesCountAggregateInput, {nullable:true})
    _count?: WorkflowsOnEventTypesCountAggregateInput;

    @Field(() => WorkflowsOnEventTypesAvgAggregateInput, {nullable:true})
    _avg?: WorkflowsOnEventTypesAvgAggregateInput;

    @Field(() => WorkflowsOnEventTypesSumAggregateInput, {nullable:true})
    _sum?: WorkflowsOnEventTypesSumAggregateInput;

    @Field(() => WorkflowsOnEventTypesMinAggregateInput, {nullable:true})
    _min?: WorkflowsOnEventTypesMinAggregateInput;

    @Field(() => WorkflowsOnEventTypesMaxAggregateInput, {nullable:true})
    _max?: WorkflowsOnEventTypesMaxAggregateInput;
}
