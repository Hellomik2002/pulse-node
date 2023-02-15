import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { ImpersonationsCountOrderByAggregateInput } from './impersonations-count-order-by-aggregate.input';
import { ImpersonationsAvgOrderByAggregateInput } from './impersonations-avg-order-by-aggregate.input';
import { ImpersonationsMaxOrderByAggregateInput } from './impersonations-max-order-by-aggregate.input';
import { ImpersonationsMinOrderByAggregateInput } from './impersonations-min-order-by-aggregate.input';
import { ImpersonationsSumOrderByAggregateInput } from './impersonations-sum-order-by-aggregate.input';

@InputType()
export class ImpersonationsOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    impersonatedUserId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    impersonatedById?: keyof typeof SortOrder;

    @Field(() => ImpersonationsCountOrderByAggregateInput, {nullable:true})
    _count?: ImpersonationsCountOrderByAggregateInput;

    @Field(() => ImpersonationsAvgOrderByAggregateInput, {nullable:true})
    _avg?: ImpersonationsAvgOrderByAggregateInput;

    @Field(() => ImpersonationsMaxOrderByAggregateInput, {nullable:true})
    _max?: ImpersonationsMaxOrderByAggregateInput;

    @Field(() => ImpersonationsMinOrderByAggregateInput, {nullable:true})
    _min?: ImpersonationsMinOrderByAggregateInput;

    @Field(() => ImpersonationsSumOrderByAggregateInput, {nullable:true})
    _sum?: ImpersonationsSumOrderByAggregateInput;
}
