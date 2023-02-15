import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ApiKeyCountAggregate } from './api-key-count-aggregate.output';
import { ApiKeyAvgAggregate } from './api-key-avg-aggregate.output';
import { ApiKeySumAggregate } from './api-key-sum-aggregate.output';
import { ApiKeyMinAggregate } from './api-key-min-aggregate.output';
import { ApiKeyMaxAggregate } from './api-key-max-aggregate.output';

@ObjectType()
export class ApiKeyGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => Int, {nullable:false})
    userId!: number;

    @Field(() => String, {nullable:true})
    note?: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:true})
    expiresAt?: Date | string;

    @Field(() => Date, {nullable:true})
    lastUsedAt?: Date | string;

    @Field(() => String, {nullable:false})
    hashedKey!: string;

    @Field(() => String, {nullable:true})
    appId?: string;

    @Field(() => ApiKeyCountAggregate, {nullable:true})
    _count?: ApiKeyCountAggregate;

    @Field(() => ApiKeyAvgAggregate, {nullable:true})
    _avg?: ApiKeyAvgAggregate;

    @Field(() => ApiKeySumAggregate, {nullable:true})
    _sum?: ApiKeySumAggregate;

    @Field(() => ApiKeyMinAggregate, {nullable:true})
    _min?: ApiKeyMinAggregate;

    @Field(() => ApiKeyMaxAggregate, {nullable:true})
    _max?: ApiKeyMaxAggregate;
}
