import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { App_RoutingForms_FormResponseUncheckedCreateNestedManyWithoutFormInput } from '../app-routing-forms-form-response/app-routing-forms-form-response-unchecked-create-nested-many-without-form.input';

@InputType()
export class App_RoutingForms_FormUncheckedCreateWithoutUserInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => GraphQLJSON, {nullable:true})
    routes?: any;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => GraphQLJSON, {nullable:true})
    fields?: any;

    @Field(() => App_RoutingForms_FormResponseUncheckedCreateNestedManyWithoutFormInput, {nullable:true})
    responses?: App_RoutingForms_FormResponseUncheckedCreateNestedManyWithoutFormInput;

    @Field(() => Boolean, {nullable:true})
    disabled?: boolean;

    @Field(() => GraphQLJSON, {nullable:true})
    settings?: any;
}
