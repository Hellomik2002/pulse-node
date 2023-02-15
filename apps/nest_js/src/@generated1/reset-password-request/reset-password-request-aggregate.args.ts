import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ResetPasswordRequestWhereInput } from './reset-password-request-where.input';
import { Type } from 'class-transformer';
import { ResetPasswordRequestOrderByWithRelationInput } from './reset-password-request-order-by-with-relation.input';
import { ResetPasswordRequestWhereUniqueInput } from './reset-password-request-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ResetPasswordRequestCountAggregateInput } from './reset-password-request-count-aggregate.input';
import { ResetPasswordRequestMinAggregateInput } from './reset-password-request-min-aggregate.input';
import { ResetPasswordRequestMaxAggregateInput } from './reset-password-request-max-aggregate.input';

@ArgsType()
export class ResetPasswordRequestAggregateArgs {

    @Field(() => ResetPasswordRequestWhereInput, {nullable:true})
    @Type(() => ResetPasswordRequestWhereInput)
    where?: ResetPasswordRequestWhereInput;

    @Field(() => [ResetPasswordRequestOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ResetPasswordRequestOrderByWithRelationInput>;

    @Field(() => ResetPasswordRequestWhereUniqueInput, {nullable:true})
    cursor?: ResetPasswordRequestWhereUniqueInput;

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
