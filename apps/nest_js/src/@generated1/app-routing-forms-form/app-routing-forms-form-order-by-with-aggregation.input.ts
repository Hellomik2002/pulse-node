import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { App_RoutingForms_FormCountOrderByAggregateInput } from './app-routing-forms-form-count-order-by-aggregate.input';
import { App_RoutingForms_FormAvgOrderByAggregateInput } from './app-routing-forms-form-avg-order-by-aggregate.input';
import { App_RoutingForms_FormMaxOrderByAggregateInput } from './app-routing-forms-form-max-order-by-aggregate.input';
import { App_RoutingForms_FormMinOrderByAggregateInput } from './app-routing-forms-form-min-order-by-aggregate.input';
import { App_RoutingForms_FormSumOrderByAggregateInput } from './app-routing-forms-form-sum-order-by-aggregate.input';

@InputType()
export class App_RoutingForms_FormOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    description?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    routes?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    fields?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    disabled?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    settings?: keyof typeof SortOrder;

    @Field(() => App_RoutingForms_FormCountOrderByAggregateInput, {nullable:true})
    _count?: App_RoutingForms_FormCountOrderByAggregateInput;

    @Field(() => App_RoutingForms_FormAvgOrderByAggregateInput, {nullable:true})
    _avg?: App_RoutingForms_FormAvgOrderByAggregateInput;

    @Field(() => App_RoutingForms_FormMaxOrderByAggregateInput, {nullable:true})
    _max?: App_RoutingForms_FormMaxOrderByAggregateInput;

    @Field(() => App_RoutingForms_FormMinOrderByAggregateInput, {nullable:true})
    _min?: App_RoutingForms_FormMinOrderByAggregateInput;

    @Field(() => App_RoutingForms_FormSumOrderByAggregateInput, {nullable:true})
    _sum?: App_RoutingForms_FormSumOrderByAggregateInput;
}
