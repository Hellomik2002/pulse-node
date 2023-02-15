import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { App_RoutingForms_FormWhereUniqueInput } from './app-routing-forms-form-where-unique.input';
import { Type } from 'class-transformer';
import { App_RoutingForms_FormCreateWithoutResponsesInput } from './app-routing-forms-form-create-without-responses.input';

@InputType()
export class App_RoutingForms_FormCreateOrConnectWithoutResponsesInput {

    @Field(() => App_RoutingForms_FormWhereUniqueInput, {nullable:false})
    @Type(() => App_RoutingForms_FormWhereUniqueInput)
    where!: App_RoutingForms_FormWhereUniqueInput;

    @Field(() => App_RoutingForms_FormCreateWithoutResponsesInput, {nullable:false})
    @Type(() => App_RoutingForms_FormCreateWithoutResponsesInput)
    create!: App_RoutingForms_FormCreateWithoutResponsesInput;
}
