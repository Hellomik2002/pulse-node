import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { App_RoutingForms_FormCreateWithoutResponsesInput } from './app-routing-forms-form-create-without-responses.input';
import { Type } from 'class-transformer';
import { App_RoutingForms_FormCreateOrConnectWithoutResponsesInput } from './app-routing-forms-form-create-or-connect-without-responses.input';
import { App_RoutingForms_FormWhereUniqueInput } from './app-routing-forms-form-where-unique.input';

@InputType()
export class App_RoutingForms_FormCreateNestedOneWithoutResponsesInput {

    @Field(() => App_RoutingForms_FormCreateWithoutResponsesInput, {nullable:true})
    @Type(() => App_RoutingForms_FormCreateWithoutResponsesInput)
    create?: App_RoutingForms_FormCreateWithoutResponsesInput;

    @Field(() => App_RoutingForms_FormCreateOrConnectWithoutResponsesInput, {nullable:true})
    @Type(() => App_RoutingForms_FormCreateOrConnectWithoutResponsesInput)
    connectOrCreate?: App_RoutingForms_FormCreateOrConnectWithoutResponsesInput;

    @Field(() => App_RoutingForms_FormWhereUniqueInput, {nullable:true})
    @Type(() => App_RoutingForms_FormWhereUniqueInput)
    connect?: App_RoutingForms_FormWhereUniqueInput;
}
