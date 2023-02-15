import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ResetPasswordRequestWhereInput } from './reset-password-request-where.input';
import { Type } from 'class-transformer';
import { ResetPasswordRequestOrderByWithAggregationInput } from './reset-password-request-order-by-with-aggregation.input';
import { ResetPasswordRequestScalarFieldEnum } from './reset-password-request-scalar-field.enum';
import { ResetPasswordRequestScalarWhereWithAggregatesInput } from './reset-password-request-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { ResetPasswordRequestCountAggregateInput } from './reset-password-request-count-aggregate.input';
import { ResetPasswordRequestMinAggregateInput } from './reset-password-request-min-aggregate.input';
import { ResetPasswordRequestMaxAggregateInput } from './reset-password-request-max-aggregate.input';

@ArgsType()
export class ResetPasswordRequestGroupByArgs {

    @Field(() => ResetPasswordRequestWhereInput, {nullable:true})
    @Type(() => ResetPasswordRequestWhereInput)
    where?: ResetPasswordRequestWhereInput;

    @Field(() => [ResetPasswordRequestOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<ResetPasswordRequestOrderByWithAggregationInput>;

    @Field(() => [ResetPasswordRequestScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof ResetPasswordRequestScalarFieldEnum>;

    @Field(() => ResetPasswordRequestScalarWhereWithAggregatesInput, {nullable:true})
    having?: ResetPasswordRequestScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => ResetPasswordRequestCountAggregateInput, {nullable:true})
    _count?: ResetPasswordRequestCountAggregateInput;

    @Field(() => ResetPasswordRequestMinAggregateInput, {nullable:true})
    _min?: ResetPasswordRequestMinAggregateInput;

    @Field(() => ResetPasswordRequestMaxAggregateInput, {nullable:true})
    _max?: ResetPasswordRequestMaxAggregateInput;
}
