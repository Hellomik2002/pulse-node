import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SelectedCalendarWhereInput } from './selected-calendar-where.input';
import { Type } from 'class-transformer';
import { SelectedCalendarOrderByWithRelationInput } from './selected-calendar-order-by-with-relation.input';
import { SelectedCalendarWhereUniqueInput } from './selected-calendar-where-unique.input';
import { Int } from '@nestjs/graphql';
import { SelectedCalendarCountAggregateInput } from './selected-calendar-count-aggregate.input';
import { SelectedCalendarAvgAggregateInput } from './selected-calendar-avg-aggregate.input';
import { SelectedCalendarSumAggregateInput } from './selected-calendar-sum-aggregate.input';
import { SelectedCalendarMinAggregateInput } from './selected-calendar-min-aggregate.input';
import { SelectedCalendarMaxAggregateInput } from './selected-calendar-max-aggregate.input';

@ArgsType()
export class SelectedCalendarAggregateArgs {

    @Field(() => SelectedCalendarWhereInput, {nullable:true})
    @Type(() => SelectedCalendarWhereInput)
    where?: SelectedCalendarWhereInput;

    @Field(() => [SelectedCalendarOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<SelectedCalendarOrderByWithRelationInput>;

    @Field(() => SelectedCalendarWhereUniqueInput, {nullable:true})
    cursor?: SelectedCalendarWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => SelectedCalendarCountAggregateInput, {nullable:true})
    _count?: SelectedCalendarCountAggregateInput;

    @Field(() => SelectedCalendarAvgAggregateInput, {nullable:true})
    _avg?: SelectedCalendarAvgAggregateInput;

    @Field(() => SelectedCalendarSumAggregateInput, {nullable:true})
    _sum?: SelectedCalendarSumAggregateInput;

    @Field(() => SelectedCalendarMinAggregateInput, {nullable:true})
    _min?: SelectedCalendarMinAggregateInput;

    @Field(() => SelectedCalendarMaxAggregateInput, {nullable:true})
    _max?: SelectedCalendarMaxAggregateInput;
}
