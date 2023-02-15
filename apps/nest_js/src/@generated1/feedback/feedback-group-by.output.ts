import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { FeedbackCountAggregate } from './feedback-count-aggregate.output';
import { FeedbackAvgAggregate } from './feedback-avg-aggregate.output';
import { FeedbackSumAggregate } from './feedback-sum-aggregate.output';
import { FeedbackMinAggregate } from './feedback-min-aggregate.output';
import { FeedbackMaxAggregate } from './feedback-max-aggregate.output';

@ObjectType()
export class FeedbackGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Date, {nullable:false})
    date!: Date | string;

    @Field(() => Int, {nullable:false})
    userId!: number;

    @Field(() => String, {nullable:false})
    rating!: string;

    @Field(() => String, {nullable:true})
    comment?: string;

    @Field(() => FeedbackCountAggregate, {nullable:true})
    _count?: FeedbackCountAggregate;

    @Field(() => FeedbackAvgAggregate, {nullable:true})
    _avg?: FeedbackAvgAggregate;

    @Field(() => FeedbackSumAggregate, {nullable:true})
    _sum?: FeedbackSumAggregate;

    @Field(() => FeedbackMinAggregate, {nullable:true})
    _min?: FeedbackMinAggregate;

    @Field(() => FeedbackMaxAggregate, {nullable:true})
    _max?: FeedbackMaxAggregate;
}
