import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { App_RoutingForms_FormWhereInput } from '../app-routing-forms-form/app-routing-forms-form-where.input';
import { Type } from 'class-transformer';
import { App_RoutingForms_FormOrderByWithAggregationInput } from '../app-routing-forms-form/app-routing-forms-form-order-by-with-aggregation.input';
import { App_RoutingForms_FormScalarFieldEnum } from '../app-routing-forms-form/app-routing-forms-form-scalar-field.enum';
import { App_RoutingForms_FormScalarWhereWithAggregatesInput } from '../app-routing-forms-form/app-routing-forms-form-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class GroupByAppRoutingFormsFormArgs {

    @Field(() => App_RoutingForms_FormWhereInput, {nullable:true})
    @Type(() => App_RoutingForms_FormWhereInput)
    where?: App_RoutingForms_FormWhereInput;

    @Field(() => [App_RoutingForms_FormOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<App_RoutingForms_FormOrderByWithAggregationInput>;

    @Field(() => [App_RoutingForms_FormScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof App_RoutingForms_FormScalarFieldEnum>;

    @Field(() => App_RoutingForms_FormScalarWhereWithAggregatesInput, {nullable:true})
    having?: App_RoutingForms_FormScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
