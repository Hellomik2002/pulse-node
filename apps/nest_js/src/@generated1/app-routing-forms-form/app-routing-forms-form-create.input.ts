import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { UserCreateNestedOneWithoutRoutingFormsInput } from '../user/user-create-nested-one-without-routing-forms.input';
import { App_RoutingForms_FormResponseCreateNestedManyWithoutFormInput } from '../app-routing-forms-form-response/app-routing-forms-form-response-create-nested-many-without-form.input';

@InputType()
export class App_RoutingForms_FormCreateInput {

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

    @Field(() => UserCreateNestedOneWithoutRoutingFormsInput, {nullable:false})
    user!: UserCreateNestedOneWithoutRoutingFormsInput;

    @Field(() => App_RoutingForms_FormResponseCreateNestedManyWithoutFormInput, {nullable:true})
    responses?: App_RoutingForms_FormResponseCreateNestedManyWithoutFormInput;

    @Field(() => Boolean, {nullable:true})
    disabled?: boolean;

    @Field(() => GraphQLJSON, {nullable:true})
    settings?: any;
}
