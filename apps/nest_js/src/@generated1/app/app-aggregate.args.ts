import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AppWhereInput } from './app-where.input';
import { Type } from 'class-transformer';
import { AppOrderByWithRelationInput } from './app-order-by-with-relation.input';
import { AppWhereUniqueInput } from './app-where-unique.input';
import { Int } from '@nestjs/graphql';
import { AppCountAggregateInput } from './app-count-aggregate.input';
import { AppMinAggregateInput } from './app-min-aggregate.input';
import { AppMaxAggregateInput } from './app-max-aggregate.input';

@ArgsType()
export class AppAggregateArgs {

    @Field(() => AppWhereInput, {nullable:true})
    @Type(() => AppWhereInput)
    where?: AppWhereInput;

    @Field(() => [AppOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<AppOrderByWithRelationInput>;

    @Field(() => AppWhereUniqueInput, {nullable:true})
    cursor?: AppWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => AppCountAggregateInput, {nullable:true})
    _count?: AppCountAggregateInput;

    @Field(() => AppMinAggregateInput, {nullable:true})
    _min?: AppMinAggregateInput;

    @Field(() => AppMaxAggregateInput, {nullable:true})
    _max?: AppMaxAggregateInput;
}
