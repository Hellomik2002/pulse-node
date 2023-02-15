import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { VerificationTokenCountOrderByAggregateInput } from './verification-token-count-order-by-aggregate.input';
import { VerificationTokenAvgOrderByAggregateInput } from './verification-token-avg-order-by-aggregate.input';
import { VerificationTokenMaxOrderByAggregateInput } from './verification-token-max-order-by-aggregate.input';
import { VerificationTokenMinOrderByAggregateInput } from './verification-token-min-order-by-aggregate.input';
import { VerificationTokenSumOrderByAggregateInput } from './verification-token-sum-order-by-aggregate.input';

@InputType()
export class VerificationTokenOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    identifier?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    token?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    expires?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => VerificationTokenCountOrderByAggregateInput, {nullable:true})
    _count?: VerificationTokenCountOrderByAggregateInput;

    @Field(() => VerificationTokenAvgOrderByAggregateInput, {nullable:true})
    _avg?: VerificationTokenAvgOrderByAggregateInput;

    @Field(() => VerificationTokenMaxOrderByAggregateInput, {nullable:true})
    _max?: VerificationTokenMaxOrderByAggregateInput;

    @Field(() => VerificationTokenMinOrderByAggregateInput, {nullable:true})
    _min?: VerificationTokenMinOrderByAggregateInput;

    @Field(() => VerificationTokenSumOrderByAggregateInput, {nullable:true})
    _sum?: VerificationTokenSumOrderByAggregateInput;
}
