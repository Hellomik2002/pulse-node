import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ImpersonationsWhereInput } from './impersonations-where.input';
import { Type } from 'class-transformer';
import { ImpersonationsOrderByWithRelationInput } from './impersonations-order-by-with-relation.input';
import { ImpersonationsWhereUniqueInput } from './impersonations-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ImpersonationsCountAggregateInput } from './impersonations-count-aggregate.input';
import { ImpersonationsAvgAggregateInput } from './impersonations-avg-aggregate.input';
import { ImpersonationsSumAggregateInput } from './impersonations-sum-aggregate.input';
import { ImpersonationsMinAggregateInput } from './impersonations-min-aggregate.input';
import { ImpersonationsMaxAggregateInput } from './impersonations-max-aggregate.input';

@ArgsType()
export class ImpersonationsAggregateArgs {

    @Field(() => ImpersonationsWhereInput, {nullable:true})
    @Type(() => ImpersonationsWhereInput)
    where?: ImpersonationsWhereInput;

    @Field(() => [ImpersonationsOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ImpersonationsOrderByWithRelationInput>;

    @Field(() => ImpersonationsWhereUniqueInput, {nullable:true})
    cursor?: ImpersonationsWhereUniqueInput;

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
