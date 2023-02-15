import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { VerifiedNumberWhereInput } from './verified-number-where.input';
import { Type } from 'class-transformer';
import { VerifiedNumberOrderByWithAggregationInput } from './verified-number-order-by-with-aggregation.input';
import { VerifiedNumberScalarFieldEnum } from './verified-number-scalar-field.enum';
import { VerifiedNumberScalarWhereWithAggregatesInput } from './verified-number-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { VerifiedNumberCountAggregateInput } from './verified-number-count-aggregate.input';
import { VerifiedNumberAvgAggregateInput } from './verified-number-avg-aggregate.input';
import { VerifiedNumberSumAggregateInput } from './verified-number-sum-aggregate.input';
import { VerifiedNumberMinAggregateInput } from './verified-number-min-aggregate.input';
import { VerifiedNumberMaxAggregateInput } from './verified-number-max-aggregate.input';

@ArgsType()
export class VerifiedNumberGroupByArgs {

    @Field(() => VerifiedNumberWhereInput, {nullable:true})
    @Type(() => VerifiedNumberWhereInput)
    where?: VerifiedNumberWhereInput;

    @Field(() => [VerifiedNumberOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<VerifiedNumberOrderByWithAggregationInput>;

    @Field(() => [VerifiedNumberScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof VerifiedNumberScalarFieldEnum>;

    @Field(() => VerifiedNumberScalarWhereWithAggregatesInput, {nullable:true})
    having?: VerifiedNumberScalarWhereWithAggregatesInput;

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
