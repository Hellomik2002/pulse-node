import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { VerifiedNumberCountOrderByAggregateInput } from './verified-number-count-order-by-aggregate.input';
import { VerifiedNumberAvgOrderByAggregateInput } from './verified-number-avg-order-by-aggregate.input';
import { VerifiedNumberMaxOrderByAggregateInput } from './verified-number-max-order-by-aggregate.input';
import { VerifiedNumberMinOrderByAggregateInput } from './verified-number-min-order-by-aggregate.input';
import { VerifiedNumberSumOrderByAggregateInput } from './verified-number-sum-order-by-aggregate.input';

@InputType()
export class VerifiedNumberOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    phoneNumber?: keyof typeof SortOrder;

    @Field(() => VerifiedNumberCountOrderByAggregateInput, {nullable:true})
    _count?: VerifiedNumberCountOrderByAggregateInput;

    @Field(() => VerifiedNumberAvgOrderByAggregateInput, {nullable:true})
    _avg?: VerifiedNumberAvgOrderByAggregateInput;

    @Field(() => VerifiedNumberMaxOrderByAggregateInput, {nullable:true})
    _max?: VerifiedNumberMaxOrderByAggregateInput;

    @Field(() => VerifiedNumberMinOrderByAggregateInput, {nullable:true})
    _min?: VerifiedNumberMinOrderByAggregateInput;

    @Field(() => VerifiedNumberSumOrderByAggregateInput, {nullable:true})
    _sum?: VerifiedNumberSumOrderByAggregateInput;
}
