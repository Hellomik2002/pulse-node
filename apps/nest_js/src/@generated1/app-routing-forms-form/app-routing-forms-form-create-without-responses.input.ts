import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { UserCreateNestedOneWithoutRoutingFormsInput } from '../user/user-create-nested-one-without-routing-forms.input';

@InputType()
export class App_RoutingForms_FormCreateWithoutResponsesInput {

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

    @Field(() => Boolean, {nullable:true})
    disabled?: boolean;

    @Field(() => GraphQLJSON, {nullable:true})
    settings?: any;
}
