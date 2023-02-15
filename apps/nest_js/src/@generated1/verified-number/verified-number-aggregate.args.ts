import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { VerifiedNumberWhereInput } from './verified-number-where.input';
import { Type } from 'class-transformer';
import { VerifiedNumberOrderByWithRelationInput } from './verified-number-order-by-with-relation.input';
import { VerifiedNumberWhereUniqueInput } from './verified-number-where-unique.input';
import { Int } from '@nestjs/graphql';
import { VerifiedNumberCountAggregateInput } from './verified-number-count-aggregate.input';
import { VerifiedNumberAvgAggregateInput } from './verified-number-avg-aggregate.input';
import { VerifiedNumberSumAggregateInput } from './verified-number-sum-aggregate.input';
import { VerifiedNumberMinAggregateInput } from './verified-number-min-aggregate.input';
import { VerifiedNumberMaxAggregateInput } from './verified-number-max-aggregate.input';

@ArgsType()
export class VerifiedNumberAggregateArgs {

    @Field(() => VerifiedNumberWhereInput, {nullable:true})
    @Type(() => VerifiedNumberWhereInput)
    where?: VerifiedNumberWhereInput;

    @Field(() => [VerifiedNumberOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<VerifiedNumberOrderByWithRelationInput>;

    @Field(() => VerifiedNumberWhereUniqueInput, {nullable:true})
    cursor?: VerifiedNumberWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => VerifiedNumberCountAggregateInput, {nullable:true})
    _count?: VerifiedNumberCountAggregateInput;

    @Field(() => VerifiedNumberAvgAggregateInput, {nullable:true})
    _avg?: VerifiedNumberAvgAggregateInput;

    @Field(() => VerifiedNumberSumAggregateInput, {nullable:true})
    _sum?: VerifiedNumberSumAggregateInput;

    @Field(() => VerifiedNumberMinAggregateInput, {nullable:true})
    _min?: VerifiedNumberMinAggregateInput;

    @Field(() => VerifiedNumberMaxAggregateInput, {nullable:true})
    _max?: VerifiedNumberMaxAggregateInput;
}
