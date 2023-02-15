import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { App_RoutingForms_FormResponseCountOrderByAggregateInput } from './app-routing-forms-form-response-count-order-by-aggregate.input';
import { App_RoutingForms_FormResponseAvgOrderByAggregateInput } from './app-routing-forms-form-response-avg-order-by-aggregate.input';
import { App_RoutingForms_FormResponseMaxOrderByAggregateInput } from './app-routing-forms-form-response-max-order-by-aggregate.input';
import { App_RoutingForms_FormResponseMinOrderByAggregateInput } from './app-routing-forms-form-response-min-order-by-aggregate.input';
import { App_RoutingForms_FormResponseSumOrderByAggregateInput } from './app-routing-forms-form-response-sum-order-by-aggregate.input';

@InputType()
export class App_RoutingForms_FormResponseOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    formFillerId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    formId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    response?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => App_RoutingForms_FormResponseCountOrderByAggregateInput, {nullable:true})
    _count?: App_RoutingForms_FormResponseCountOrderByAggregateInput;

    @Field(() => App_RoutingForms_FormResponseAvgOrderByAggregateInput, {nullable:true})
    _avg?: App_RoutingForms_FormResponseAvgOrderByAggregateInput;

    @Field(() => App_RoutingForms_FormResponseMaxOrderByAggregateInput, {nullable:true})
    _max?: App_RoutingForms_FormResponseMaxOrderByAggregateInput;

    @Field(() => App_RoutingForms_FormResponseMinOrderByAggregateInput, {nullable:true})
    _min?: App_RoutingForms_FormResponseMinOrderByAggregateInput;

    @Field(() => App_RoutingForms_FormResponseSumOrderByAggregateInput, {nullable:true})
    _sum?: App_RoutingForms_FormResponseSumOrderByAggregateInput;
}
