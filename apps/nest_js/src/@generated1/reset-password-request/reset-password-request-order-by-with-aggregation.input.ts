import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { ResetPasswordRequestCountOrderByAggregateInput } from './reset-password-request-count-order-by-aggregate.input';
import { ResetPasswordRequestMaxOrderByAggregateInput } from './reset-password-request-max-order-by-aggregate.input';
import { ResetPasswordRequestMinOrderByAggregateInput } from './reset-password-request-min-order-by-aggregate.input';

@InputType()
export class ResetPasswordRequestOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    email?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    expires?: keyof typeof SortOrder;

    @Field(() => ResetPasswordRequestCountOrderByAggregateInput, {nullable:true})
    _count?: ResetPasswordRequestCountOrderByAggregateInput;

    @Field(() => ResetPasswordRequestMaxOrderByAggregateInput, {nullable:true})
    _max?: ResetPasswordRequestMaxOrderByAggregateInput;

    @Field(() => ResetPasswordRequestMinOrderByAggregateInput, {nullable:true})
    _min?: ResetPasswordRequestMinOrderByAggregateInput;
}
