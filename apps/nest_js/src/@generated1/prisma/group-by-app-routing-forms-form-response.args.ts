import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { App_RoutingForms_FormResponseWhereInput } from '../app-routing-forms-form-response/app-routing-forms-form-response-where.input';
import { Type } from 'class-transformer';
import { App_RoutingForms_FormResponseOrderByWithAggregationInput } from '../app-routing-forms-form-response/app-routing-forms-form-response-order-by-with-aggregation.input';
import { App_RoutingForms_FormResponseScalarFieldEnum } from '../app-routing-forms-form-response/app-routing-forms-form-response-scalar-field.enum';
import { App_RoutingForms_FormResponseScalarWhereWithAggregatesInput } from '../app-routing-forms-form-response/app-routing-forms-form-response-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class GroupByAppRoutingFormsFormResponseArgs {

    @Field(() => App_RoutingForms_FormResponseWhereInput, {nullable:true})
    @Type(() => App_RoutingForms_FormResponseWhereInput)
    where?: App_RoutingForms_FormResponseWhereInput;

    @Field(() => [App_RoutingForms_FormResponseOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<App_RoutingForms_FormResponseOrderByWithAggregationInput>;

    @Field(() => [App_RoutingForms_FormResponseScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof App_RoutingForms_FormResponseScalarFieldEnum>;

    @Field(() => App_RoutingForms_FormResponseScalarWhereWithAggregatesInput, {nullable:true})
    having?: App_RoutingForms_FormResponseScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
