import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { AvailabilityCountAggregate } from './availability-count-aggregate.output';
import { AvailabilityAvgAggregate } from './availability-avg-aggregate.output';
import { AvailabilitySumAggregate } from './availability-sum-aggregate.output';
import { AvailabilityMinAggregate } from './availability-min-aggregate.output';
import { AvailabilityMaxAggregate } from './availability-max-aggregate.output';

@ObjectType()
export class AvailabilityGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:true})
    userId?: number;

    @Field(() => Int, {nullable:true})
    eventTypeId?: number;

    @Field(() => [Int], {nullable:true})
    days?: Array<number>;

    @Field(() => Date, {nullable:false})
    startTime!: Date | string;

    @Field(() => Date, {nullable:false})
    endTime!: Date | string;

    @Field(() => Date, {nullable:true})
    date?: Date | string;

    @Field(() => Int, {nullable:true})
    scheduleId?: number;

    @Field(() => AvailabilityCountAggregate, {nullable:true})
    _count?: AvailabilityCountAggregate;

    @Field(() => AvailabilityAvgAggregate, {nullable:true})
    _avg?: AvailabilityAvgAggregate;

    @Field(() => AvailabilitySumAggregate, {nullable:true})
    _sum?: AvailabilitySumAggregate;

    @Field(() => AvailabilityMinAggregate, {nullable:true})
    _min?: AvailabilityMinAggregate;

    @Field(() => AvailabilityMaxAggregate, {nullable:true})
    _max?: AvailabilityMaxAggregate;
}
