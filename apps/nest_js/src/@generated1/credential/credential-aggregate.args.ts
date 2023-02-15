import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CredentialWhereInput } from './credential-where.input';
import { Type } from 'class-transformer';
import { CredentialOrderByWithRelationInput } from './credential-order-by-with-relation.input';
import { CredentialWhereUniqueInput } from './credential-where-unique.input';
import { Int } from '@nestjs/graphql';
import { CredentialCountAggregateInput } from './credential-count-aggregate.input';
import { CredentialAvgAggregateInput } from './credential-avg-aggregate.input';
import { CredentialSumAggregateInput } from './credential-sum-aggregate.input';
import { CredentialMinAggregateInput } from './credential-min-aggregate.input';
import { CredentialMaxAggregateInput } from './credential-max-aggregate.input';

@ArgsType()
export class CredentialAggregateArgs {

    @Field(() => CredentialWhereInput, {nullable:true})
    @Type(() => CredentialWhereInput)
    where?: CredentialWhereInput;

    @Field(() => [CredentialOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<CredentialOrderByWithRelationInput>;

    @Field(() => CredentialWhereUniqueInput, {nullable:true})
    cursor?: CredentialWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => CredentialCountAggregateInput, {nullable:true})
    _count?: CredentialCountAggregateInput;

    @Field(() => CredentialAvgAggregateInput, {nullable:true})
    _avg?: CredentialAvgAggregateInput;

    @Field(() => CredentialSumAggregateInput, {nullable:true})
    _sum?: CredentialSumAggregateInput;

    @Field(() => CredentialMinAggregateInput, {nullable:true})
    _min?: CredentialMinAggregateInput;

    @Field(() => CredentialMaxAggregateInput, {nullable:true})
    _max?: CredentialMaxAggregateInput;
}
