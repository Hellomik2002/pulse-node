import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { App_RoutingForms_FormResponseWhereInput } from './app-routing-forms-form-response-where.input';

@InputType()
export class App_RoutingForms_FormResponseListRelationFilter {

    @Field(() => App_RoutingForms_FormResponseWhereInput, {nullable:true})
    every?: App_RoutingForms_FormResponseWhereInput;

    @Field(() => App_RoutingForms_FormResponseWhereInput, {nullable:true})
    some?: App_RoutingForms_FormResponseWhereInput;

    @Field(() => App_RoutingForms_FormResponseWhereInput, {nullable:true})
    none?: App_RoutingForms_FormResponseWhereInput;
}
