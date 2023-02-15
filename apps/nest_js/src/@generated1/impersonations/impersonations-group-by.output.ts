import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ImpersonationsCountAggregate } from './impersonations-count-aggregate.output';
import { ImpersonationsAvgAggregate } from './impersonations-avg-aggregate.output';
import { ImpersonationsSumAggregate } from './impersonations-sum-aggregate.output';
import { ImpersonationsMinAggregate } from './impersonations-min-aggregate.output';
import { ImpersonationsMaxAggregate } from './impersonations-max-aggregate.output';

@ObjectType()
export class ImpersonationsGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Int, {nullable:false})
    impersonatedUserId!: number;

    @Field(() => Int, {nullable:false})
    impersonatedById!: number;

    @Field(() => ImpersonationsCountAggregate, {nullable:true})
    _count?: ImpersonationsCountAggregate;

    @Field(() => ImpersonationsAvgAggregate, {nullable:true})
    _avg?: ImpersonationsAvgAggregate;

    @Field(() => ImpersonationsSumAggregate, {nullable:true})
    _sum?: ImpersonationsSumAggregate;

    @Field(() => ImpersonationsMinAggregate, {nullable:true})
    _min?: ImpersonationsMinAggregate;

    @Field(() => ImpersonationsMaxAggregate, {nullable:true})
    _max?: ImpersonationsMaxAggregate;
}
