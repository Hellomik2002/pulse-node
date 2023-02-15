import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { CredentialCountAggregate } from './credential-count-aggregate.output';
import { CredentialAvgAggregate } from './credential-avg-aggregate.output';
import { CredentialSumAggregate } from './credential-sum-aggregate.output';
import { CredentialMinAggregate } from './credential-min-aggregate.output';
import { CredentialMaxAggregate } from './credential-max-aggregate.output';

@ObjectType()
export class AggregateCredential {

    @Field(() => CredentialCountAggregate, {nullable:true})
    _count?: CredentialCountAggregate;

    @Field(() => CredentialAvgAggregate, {nullable:true})
    _avg?: CredentialAvgAggregate;

    @Field(() => CredentialSumAggregate, {nullable:true})
    _sum?: CredentialSumAggregate;

    @Field(() => CredentialMinAggregate, {nullable:true})
    _min?: CredentialMinAggregate;

    @Field(() => CredentialMaxAggregate, {nullable:true})
    _max?: CredentialMaxAggregate;
}
