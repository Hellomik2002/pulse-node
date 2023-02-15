import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { HostCountAggregate } from './host-count-aggregate.output';
import { HostAvgAggregate } from './host-avg-aggregate.output';
import { HostSumAggregate } from './host-sum-aggregate.output';
import { HostMinAggregate } from './host-min-aggregate.output';
import { HostMaxAggregate } from './host-max-aggregate.output';

@ObjectType()
export class HostGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    userId!: number;

    @Field(() => Int, {nullable:false})
    eventTypeId!: number;

    @Field(() => Boolean, {nullable:false})
    isFixed!: boolean;

    @Field(() => HostCountAggregate, {nullable:true})
    _count?: HostCountAggregate;

    @Field(() => HostAvgAggregate, {nullable:true})
    _avg?: HostAvgAggregate;

    @Field(() => HostSumAggregate, {nullable:true})
    _sum?: HostSumAggregate;

    @Field(() => HostMinAggregate, {nullable:true})
    _min?: HostMinAggregate;

    @Field(() => HostMaxAggregate, {nullable:true})
    _max?: HostMaxAggregate;
}
