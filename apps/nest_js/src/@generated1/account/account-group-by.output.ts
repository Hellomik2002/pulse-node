import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { AccountCountAggregate } from './account-count-aggregate.output';
import { AccountAvgAggregate } from './account-avg-aggregate.output';
import { AccountSumAggregate } from './account-sum-aggregate.output';
import { AccountMinAggregate } from './account-min-aggregate.output';
import { AccountMaxAggregate } from './account-max-aggregate.output';

@ObjectType()
export class AccountGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => Int, {nullable:false})
    userId!: number;

    @Field(() => String, {nullable:false})
    type!: string;

    @Field(() => String, {nullable:false})
    provider!: string;

    @Field(() => String, {nullable:false})
    providerAccountId!: string;

    @Field(() => String, {nullable:true})
    refresh_token?: string;

    @Field(() => String, {nullable:true})
    access_token?: string;

    @Field(() => Int, {nullable:true})
    expires_at?: number;

    @Field(() => String, {nullable:true})
    token_type?: string;

    @Field(() => String, {nullable:true})
    scope?: string;

    @Field(() => String, {nullable:true})
    id_token?: string;

    @Field(() => String, {nullable:true})
    session_state?: string;

    @Field(() => AccountCountAggregate, {nullable:true})
    _count?: AccountCountAggregate;

    @Field(() => AccountAvgAggregate, {nullable:true})
    _avg?: AccountAvgAggregate;

    @Field(() => AccountSumAggregate, {nullable:true})
    _sum?: AccountSumAggregate;

    @Field(() => AccountMinAggregate, {nullable:true})
    _min?: AccountMinAggregate;

    @Field(() => AccountMaxAggregate, {nullable:true})
    _max?: AccountMaxAggregate;
}
