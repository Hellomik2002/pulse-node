import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { UserOrderByWithRelationInput } from '../user/user-order-by-with-relation.input';
import { App_RoutingForms_FormResponseOrderByRelationAggregateInput } from '../app-routing-forms-form-response/app-routing-forms-form-response-order-by-relation-aggregate.input';

@InputType()
export class App_RoutingForms_FormOrderByWithRelationInput {

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

    @Field(() => UserOrderByWithRelationInput, {nullable:true})
    user?: UserOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;

    @Field(() => App_RoutingForms_FormResponseOrderByRelationAggregateInput, {nullable:true})
    responses?: App_RoutingForms_FormResponseOrderByRelationAggregateInput;

    @Field(() => SortOrder, {nullable:true})
    disabled?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    settings?: keyof typeof SortOrder;
}
