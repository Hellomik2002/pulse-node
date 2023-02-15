import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { App_RoutingForms_FormCreateNestedOneWithoutResponsesInput } from '../app-routing-forms-form/app-routing-forms-form-create-nested-one-without-responses.input';
import { GraphQLJSON } from 'graphql-type-json';

@InputType()
export class App_RoutingForms_FormResponseCreateInput {

    @Field(() => String, {nullable:true})
    formFillerId?: string;

    @Field(() => App_RoutingForms_FormCreateNestedOneWithoutResponsesInput, {nullable:false})
    form!: App_RoutingForms_FormCreateNestedOneWithoutResponsesInput;

    @Field(() => GraphQLJSON, {nullable:false})
    response!: any;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
}
