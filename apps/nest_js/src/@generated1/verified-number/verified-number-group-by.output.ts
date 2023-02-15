import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { VerifiedNumberCountAggregate } from './verified-number-count-aggregate.output';
import { VerifiedNumberAvgAggregate } from './verified-number-avg-aggregate.output';
import { VerifiedNumberSumAggregate } from './verified-number-sum-aggregate.output';
import { VerifiedNumberMinAggregate } from './verified-number-min-aggregate.output';
import { VerifiedNumberMaxAggregate } from './verified-number-max-aggregate.output';

@ObjectType()
export class VerifiedNumberGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    userId!: number;

    @Field(() => String, {nullable:false})
    phoneNumber!: string;

    @Field(() => VerifiedNumberCountAggregate, {nullable:true})
    _count?: VerifiedNumberCountAggregate;

    @Field(() => VerifiedNumberAvgAggregate, {nullable:true})
    _avg?: VerifiedNumberAvgAggregate;

    @Field(() => VerifiedNumberSumAggregate, {nullable:true})
    _sum?: VerifiedNumberSumAggregate;

    @Field(() => VerifiedNumberMinAggregate, {nullable:true})
    _min?: VerifiedNumberMinAggregate;

    @Field(() => VerifiedNumberMaxAggregate, {nullable:true})
    _max?: VerifiedNumberMaxAggregate;
}
