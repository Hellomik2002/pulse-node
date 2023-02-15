import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EventTypeCustomInputWhereInput } from './event-type-custom-input-where.input';
import { Type } from 'class-transformer';
import { EventTypeCustomInputOrderByWithAggregationInput } from './event-type-custom-input-order-by-with-aggregation.input';
import { EventTypeCustomInputScalarFieldEnum } from './event-type-custom-input-scalar-field.enum';
import { EventTypeCustomInputScalarWhereWithAggregatesInput } from './event-type-custom-input-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { EventTypeCustomInputCountAggregateInput } from './event-type-custom-input-count-aggregate.input';
import { EventTypeCustomInputAvgAggregateInput } from './event-type-custom-input-avg-aggregate.input';
import { EventTypeCustomInputSumAggregateInput } from './event-type-custom-input-sum-aggregate.input';
import { EventTypeCustomInputMinAggregateInput } from './event-type-custom-input-min-aggregate.input';
import { EventTypeCustomInputMaxAggregateInput } from './event-type-custom-input-max-aggregate.input';

@ArgsType()
export class EventTypeCustomInputGroupByArgs {

    @Field(() => EventTypeCustomInputWhereInput, {nullable:true})
    @Type(() => EventTypeCustomInputWhereInput)
    where?: EventTypeCustomInputWhereInput;

    @Field(() => [EventTypeCustomInputOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<EventTypeCustomInputOrderByWithAggregationInput>;

    @Field(() => [EventTypeCustomInputScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof EventTypeCustomInputScalarFieldEnum>;

    @Field(() => EventTypeCustomInputScalarWhereWithAggregatesInput, {nullable:true})
    having?: EventTypeCustomInputScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => EventTypeCustomInputCountAggregateInput, {nullable:true})
    _count?: EventTypeCustomInputCountAggregateInput;

    @Field(() => EventTypeCustomInputAvgAggregateInput, {nullable:true})
    _avg?: EventTypeCustomInputAvgAggregateInput;

    @Field(() => EventTypeCustomInputSumAggregateInput, {nullable:true})
    _sum?: EventTypeCustomInputSumAggregateInput;

    @Field(() => EventTypeCustomInputMinAggregateInput, {nullable:true})
    _min?: EventTypeCustomInputMinAggregateInput;

    @Field(() => EventTypeCustomInputMaxAggregateInput, {nullable:true})
    _max?: EventTypeCustomInputMaxAggregateInput;
}
