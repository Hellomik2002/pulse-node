import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { App_RoutingForms_FormWhereInput } from './app-routing-forms-form-where.input';

@InputType()
export class App_RoutingForms_FormListRelationFilter {

    @Field(() => App_RoutingForms_FormWhereInput, {nullable:true})
    every?: App_RoutingForms_FormWhereInput;

    @Field(() => App_RoutingForms_FormWhereInput, {nullable:true})
    some?: App_RoutingForms_FormWhereInput;

    @Field(() => App_RoutingForms_FormWhereInput, {nullable:true})
    none?: App_RoutingForms_FormWhereInput;
}
