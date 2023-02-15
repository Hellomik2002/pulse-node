import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { App_RoutingForms_FormUpdateWithoutResponsesInput } from './app-routing-forms-form-update-without-responses.input';
import { Type } from 'class-transformer';
import { App_RoutingForms_FormCreateWithoutResponsesInput } from './app-routing-forms-form-create-without-responses.input';

@InputType()
export class App_RoutingForms_FormUpsertWithoutResponsesInput {

    @Field(() => App_RoutingForms_FormUpdateWithoutResponsesInput, {nullable:false})
    @Type(() => App_RoutingForms_FormUpdateWithoutResponsesInput)
    update!: App_RoutingForms_FormUpdateWithoutResponsesInput;

    @Field(() => App_RoutingForms_FormCreateWithoutResponsesInput, {nullable:false})
    @Type(() => App_RoutingForms_FormCreateWithoutResponsesInput)
    create!: App_RoutingForms_FormCreateWithoutResponsesInput;
}
