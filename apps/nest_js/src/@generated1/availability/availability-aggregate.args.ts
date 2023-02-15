import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AvailabilityWhereInput } from './availability-where.input';
import { Type } from 'class-transformer';
import { AvailabilityOrderByWithRelationInput } from './availability-order-by-with-relation.input';
import { AvailabilityWhereUniqueInput } from './availability-where-unique.input';
import { Int } from '@nestjs/graphql';
import { AvailabilityCountAggregateInput } from './availability-count-aggregate.input';
import { AvailabilityAvgAggregateInput } from './availability-avg-aggregate.input';
import { AvailabilitySumAggregateInput } from './availability-sum-aggregate.input';
import { AvailabilityMinAggregateInput } from './availability-min-aggregate.input';
import { AvailabilityMaxAggregateInput } from './availability-max-aggregate.input';

@ArgsType()
export class AvailabilityAggregateArgs {

    @Field(() => AvailabilityWhereInput, {nullable:true})
    @Type(() => AvailabilityWhereInput)
    where?: AvailabilityWhereInput;

    @Field(() => [AvailabilityOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<AvailabilityOrderByWithRelationInput>;

    @Field(() => AvailabilityWhereUniqueInput, {nullable:true})
    cursor?: AvailabilityWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => AvailabilityCountAggregateInput, {nullable:true})
    _count?: AvailabilityCountAggregateInput;

    @Field(() => AvailabilityAvgAggregateInput, {nullable:true})
    _avg?: AvailabilityAvgAggregateInput;

    @Field(() => AvailabilitySumAggregateInput, {nullable:true})
    _sum?: AvailabilitySumAggregateInput;

    @Field(() => AvailabilityMinAggregateInput, {nullable:true})
    _min?: AvailabilityMinAggregateInput;

    @Field(() => AvailabilityMaxAggregateInput, {nullable:true})
    _max?: AvailabilityMaxAggregateInput;
}
