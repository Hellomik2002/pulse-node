import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { App_RoutingForms_Form } from '../app-routing-forms-form/app-routing-forms-form.model';
import { GraphQLJSON } from 'graphql-type-json';

@ObjectType()
export class App_RoutingForms_FormResponse {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    formFillerId!: string;

    @Field(() => App_RoutingForms_Form, {nullable:false})
    form?: App_RoutingForms_Form;

    @Field(() => String, {nullable:false})
    formId!: string;

    @Field(() => GraphQLJSON, {nullable:false})
    response!: any;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;
}
