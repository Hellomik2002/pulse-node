import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { App_RoutingForms_FormWhereInput } from './app-routing-forms-form-where.input';

@InputType()
export class App_RoutingForms_FormRelationFilter {

    @Field(() => App_RoutingForms_FormWhereInput, {nullable:true})
    is?: App_RoutingForms_FormWhereInput;

    @Field(() => App_RoutingForms_FormWhereInput, {nullable:true})
    isNot?: App_RoutingForms_FormWhereInput;
}
