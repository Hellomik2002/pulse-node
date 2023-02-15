import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EventTypeWhereInput } from './event-type-where.input';
import { Type } from 'class-transformer';
import { EventTypeOrderByWithRelationInput } from './event-type-order-by-with-relation.input';
import { EventTypeWhereUniqueInput } from './event-type-where-unique.input';
import { Int } from '@nestjs/graphql';
import { EventTypeCountAggregateInput } from './event-type-count-aggregate.input';
import { EventTypeAvgAggregateInput } from './event-type-avg-aggregate.input';
import { EventTypeSumAggregateInput } from './event-type-sum-aggregate.input';
import { EventTypeMinAggregateInput } from './event-type-min-aggregate.input';
import { EventTypeMaxAggregateInput } from './event-type-max-aggregate.input';

@ArgsType()
export class EventTypeAggregateArgs {

    @Field(() => EventTypeWhereInput, {nullable:true})
    @Type(() => EventTypeWhereInput)
    where?: EventTypeWhereInput;

    @Field(() => [EventTypeOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<EventTypeOrderByWithRelationInput>;

    @Field(() => EventTypeWhereUniqueInput, {nullable:true})
    cursor?: EventTypeWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => EventTypeCountAggregateInput, {nullable:true})
    _count?: EventTypeCountAggregateInput;

    @Field(() => EventTypeAvgAggregateInput, {nullable:true})
    _avg?: EventTypeAvgAggregateInput;

    @Field(() => EventTypeSumAggregateInput, {nullable:true})
    _sum?: EventTypeSumAggregateInput;

    @Field(() => EventTypeMinAggregateInput, {nullable:true})
    _min?: EventTypeMinAggregateInput;

    @Field(() => EventTypeMaxAggregateInput, {nullable:true})
    _max?: EventTypeMaxAggregateInput;
}
