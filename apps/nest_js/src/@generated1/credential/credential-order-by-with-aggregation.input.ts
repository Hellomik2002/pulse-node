import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { CredentialCountOrderByAggregateInput } from './credential-count-order-by-aggregate.input';
import { CredentialAvgOrderByAggregateInput } from './credential-avg-order-by-aggregate.input';
import { CredentialMaxOrderByAggregateInput } from './credential-max-order-by-aggregate.input';
import { CredentialMinOrderByAggregateInput } from './credential-min-order-by-aggregate.input';
import { CredentialSumOrderByAggregateInput } from './credential-sum-order-by-aggregate.input';

@InputType()
export class CredentialOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    type?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    key?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    appId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    invalid?: keyof typeof SortOrder;

    @Field(() => CredentialCountOrderByAggregateInput, {nullable:true})
    _count?: CredentialCountOrderByAggregateInput;

    @Field(() => CredentialAvgOrderByAggregateInput, {nullable:true})
    _avg?: CredentialAvgOrderByAggregateInput;

    @Field(() => CredentialMaxOrderByAggregateInput, {nullable:true})
    _max?: CredentialMaxOrderByAggregateInput;

    @Field(() => CredentialMinOrderByAggregateInput, {nullable:true})
    _min?: CredentialMinOrderByAggregateInput;

    @Field(() => CredentialSumOrderByAggregateInput, {nullable:true})
    _sum?: CredentialSumOrderByAggregateInput;
}
