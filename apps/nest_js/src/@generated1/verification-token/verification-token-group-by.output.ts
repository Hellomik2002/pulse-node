import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { VerificationTokenCountAggregate } from './verification-token-count-aggregate.output';
import { VerificationTokenAvgAggregate } from './verification-token-avg-aggregate.output';
import { VerificationTokenSumAggregate } from './verification-token-sum-aggregate.output';
import { VerificationTokenMinAggregate } from './verification-token-min-aggregate.output';
import { VerificationTokenMaxAggregate } from './verification-token-max-aggregate.output';

@ObjectType()
export class VerificationTokenGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => String, {nullable:false})
    token!: string;

    @Field(() => Date, {nullable:false})
    expires!: Date | string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => VerificationTokenCountAggregate, {nullable:true})
    _count?: VerificationTokenCountAggregate;

    @Field(() => VerificationTokenAvgAggregate, {nullable:true})
    _avg?: VerificationTokenAvgAggregate;

    @Field(() => VerificationTokenSumAggregate, {nullable:true})
    _sum?: VerificationTokenSumAggregate;

    @Field(() => VerificationTokenMinAggregate, {nullable:true})
    _min?: VerificationTokenMinAggregate;

    @Field(() => VerificationTokenMaxAggregate, {nullable:true})
    _max?: VerificationTokenMaxAggregate;
}
