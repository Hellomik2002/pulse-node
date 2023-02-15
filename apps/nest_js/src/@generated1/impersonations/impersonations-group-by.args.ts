import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ImpersonationsWhereInput } from './impersonations-where.input';
import { Type } from 'class-transformer';
import { ImpersonationsOrderByWithAggregationInput } from './impersonations-order-by-with-aggregation.input';
import { ImpersonationsScalarFieldEnum } from './impersonations-scalar-field.enum';
import { ImpersonationsScalarWhereWithAggregatesInput } from './impersonations-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { ImpersonationsCountAggregateInput } from './impersonations-count-aggregate.input';
import { ImpersonationsAvgAggregateInput } from './impersonations-avg-aggregate.input';
import { ImpersonationsSumAggregateInput } from './impersonations-sum-aggregate.input';
import { ImpersonationsMinAggregateInput } from './impersonations-min-aggregate.input';
import { ImpersonationsMaxAggregateInput } from './impersonations-max-aggregate.input';

@ArgsType()
export class ImpersonationsGroupByArgs {

    @Field(() => ImpersonationsWhereInput, {nullable:true})
    @Type(() => ImpersonationsWhereInput)
    where?: ImpersonationsWhereInput;

    @Field(() => [ImpersonationsOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<ImpersonationsOrderByWithAggregationInput>;

    @Field(() => [ImpersonationsScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof ImpersonationsScalarFieldEnum>;

    @Field(() => ImpersonationsScalarWhereWithAggregatesInput, {nullable:true})
    having?: ImpersonationsScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => ImpersonationsCountAggregateInput, {nullable:true})
    _count?: ImpersonationsCountAggregateInput;

    @Field(() => ImpersonationsAvgAggregateInput, {nullable:true})
    _avg?: ImpersonationsAvgAggregateInput;

    @Field(() => ImpersonationsSumAggregateInput, {nullable:true})
    _sum?: ImpersonationsSumAggregateInput;

    @Field(() => ImpersonationsMinAggregateInput, {nullable:true})
    _min?: ImpersonationsMinAggregateInput;

    @Field(() => ImpersonationsMaxAggregateInput, {nullable:true})
    _max?: ImpersonationsMaxAggregateInput;
}
