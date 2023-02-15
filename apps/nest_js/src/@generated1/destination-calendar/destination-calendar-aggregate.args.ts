import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DestinationCalendarWhereInput } from './destination-calendar-where.input';
import { Type } from 'class-transformer';
import { DestinationCalendarOrderByWithRelationInput } from './destination-calendar-order-by-with-relation.input';
import { DestinationCalendarWhereUniqueInput } from './destination-calendar-where-unique.input';
import { Int } from '@nestjs/graphql';
import { DestinationCalendarCountAggregateInput } from './destination-calendar-count-aggregate.input';
import { DestinationCalendarAvgAggregateInput } from './destination-calendar-avg-aggregate.input';
import { DestinationCalendarSumAggregateInput } from './destination-calendar-sum-aggregate.input';
import { DestinationCalendarMinAggregateInput } from './destination-calendar-min-aggregate.input';
import { DestinationCalendarMaxAggregateInput } from './destination-calendar-max-aggregate.input';

@ArgsType()
export class DestinationCalendarAggregateArgs {

    @Field(() => DestinationCalendarWhereInput, {nullable:true})
    @Type(() => DestinationCalendarWhereInput)
    where?: DestinationCalendarWhereInput;

    @Field(() => [DestinationCalendarOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<DestinationCalendarOrderByWithRelationInput>;

    @Field(() => DestinationCalendarWhereUniqueInput, {nullable:true})
    cursor?: DestinationCalendarWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => DestinationCalendarCountAggregateInput, {nullable:true})
    _count?: DestinationCalendarCountAggregateInput;

    @Field(() => DestinationCalendarAvgAggregateInput, {nullable:true})
    _avg?: DestinationCalendarAvgAggregateInput;

    @Field(() => DestinationCalendarSumAggregateInput, {nullable:true})
    _sum?: DestinationCalendarSumAggregateInput;

    @Field(() => DestinationCalendarMinAggregateInput, {nullable:true})
    _min?: DestinationCalendarMinAggregateInput;

    @Field(() => DestinationCalendarMaxAggregateInput, {nullable:true})
    _max?: DestinationCalendarMaxAggregateInput;
}
