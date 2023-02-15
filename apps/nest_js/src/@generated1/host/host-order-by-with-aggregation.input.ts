import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { HostCountOrderByAggregateInput } from './host-count-order-by-aggregate.input';
import { HostAvgOrderByAggregateInput } from './host-avg-order-by-aggregate.input';
import { HostMaxOrderByAggregateInput } from './host-max-order-by-aggregate.input';
import { HostMinOrderByAggregateInput } from './host-min-order-by-aggregate.input';
import { HostSumOrderByAggregateInput } from './host-sum-order-by-aggregate.input';

@InputType()
export class HostOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    eventTypeId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    isFixed?: keyof typeof SortOrder;

    @Field(() => HostCountOrderByAggregateInput, {nullable:true})
    _count?: HostCountOrderByAggregateInput;

    @Field(() => HostAvgOrderByAggregateInput, {nullable:true})
    _avg?: HostAvgOrderByAggregateInput;

    @Field(() => HostMaxOrderByAggregateInput, {nullable:true})
    _max?: HostMaxOrderByAggregateInput;

    @Field(() => HostMinOrderByAggregateInput, {nullable:true})
    _min?: HostMinOrderByAggregateInput;

    @Field(() => HostSumOrderByAggregateInput, {nullable:true})
    _sum?: HostSumOrderByAggregateInput;
}
