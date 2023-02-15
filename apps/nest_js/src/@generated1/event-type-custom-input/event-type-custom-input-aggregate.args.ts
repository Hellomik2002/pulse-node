import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EventTypeCustomInputWhereInput } from './event-type-custom-input-where.input';
import { Type } from 'class-transformer';
import { EventTypeCustomInputOrderByWithRelationInput } from './event-type-custom-input-order-by-with-relation.input';
import { EventTypeCustomInputWhereUniqueInput } from './event-type-custom-input-where-unique.input';
import { Int } from '@nestjs/graphql';
import { EventTypeCustomInputCountAggregateInput } from './event-type-custom-input-count-aggregate.input';
import { EventTypeCustomInputAvgAggregateInput } from './event-type-custom-input-avg-aggregate.input';
import { EventTypeCustomInputSumAggregateInput } from './event-type-custom-input-sum-aggregate.input';
import { EventTypeCustomInputMinAggregateInput } from './event-type-custom-input-min-aggregate.input';
import { EventTypeCustomInputMaxAggregateInput } from './event-type-custom-input-max-aggregate.input';

@ArgsType()
export class EventTypeCustomInputAggregateArgs {

    @Field(() => EventTypeCustomInputWhereInput, {nullable:true})
    @Type(() => EventTypeCustomInputWhereInput)
    where?: EventTypeCustomInputWhereInput;

    @Field(() => [EventTypeCustomInputOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<EventTypeCustomInputOrderByWithRelationInput>;

    @Field(() => EventTypeCustomInputWhereUniqueInput, {nullable:true})
    cursor?: EventTypeCustomInputWhereUniqueInput;

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
