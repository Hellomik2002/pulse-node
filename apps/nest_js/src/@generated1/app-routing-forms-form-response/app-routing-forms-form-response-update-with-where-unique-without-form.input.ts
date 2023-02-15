import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { App_RoutingForms_FormResponseWhereUniqueInput } from './app-routing-forms-form-response-where-unique.input';
import { Type } from 'class-transformer';
import { App_RoutingForms_FormResponseUpdateWithoutFormInput } from './app-routing-forms-form-response-update-without-form.input';

@InputType()
export class App_RoutingForms_FormResponseUpdateWithWhereUniqueWithoutFormInput {

    @Field(() => App_RoutingForms_FormResponseWhereUniqueInput, {nullable:false})
    @Type(() => App_RoutingForms_FormResponseWhereUniqueInput)
    where!: App_RoutingForms_FormResponseWhereUniqueInput;

    @Field(() => App_RoutingForms_FormResponseUpdateWithoutFormInput, {nullable:false})
    @Type(() => App_RoutingForms_FormResponseUpdateWithoutFormInput)
    data!: App_RoutingForms_FormResponseUpdateWithoutFormInput;
}
