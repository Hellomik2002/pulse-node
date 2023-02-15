import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { App_RoutingForms_FormOrderByWithRelationInput } from '../app-routing-forms-form/app-routing-forms-form-order-by-with-relation.input';

@InputType()
export class App_RoutingForms_FormResponseOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    formFillerId?: keyof typeof SortOrder;

    @Field(() => App_RoutingForms_FormOrderByWithRelationInput, {nullable:true})
    form?: App_RoutingForms_FormOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    formId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    response?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
}
