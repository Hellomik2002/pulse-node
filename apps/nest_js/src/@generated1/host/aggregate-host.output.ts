import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { HostCountAggregate } from './host-count-aggregate.output';
import { HostAvgAggregate } from './host-avg-aggregate.output';
import { HostSumAggregate } from './host-sum-aggregate.output';
import { HostMinAggregate } from './host-min-aggregate.output';
import { HostMaxAggregate } from './host-max-aggregate.output';

@ObjectType()
export class AggregateHost {

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
