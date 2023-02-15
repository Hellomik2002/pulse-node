import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { VerificationTokenCountAggregate } from './verification-token-count-aggregate.output';
import { VerificationTokenAvgAggregate } from './verification-token-avg-aggregate.output';
import { VerificationTokenSumAggregate } from './verification-token-sum-aggregate.output';
import { VerificationTokenMinAggregate } from './verification-token-min-aggregate.output';
import { VerificationTokenMaxAggregate } from './verification-token-max-aggregate.output';

@ObjectType()
export class AggregateVerificationToken {

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
