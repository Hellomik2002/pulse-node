import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { App_RoutingForms_FormResponseWhereUniqueInput } from './app-routing-forms-form-response-where-unique.input';
import { Type } from 'class-transformer';
import { App_RoutingForms_FormResponseCreateWithoutFormInput } from './app-routing-forms-form-response-create-without-form.input';

@InputType()
export class App_RoutingForms_FormResponseCreateOrConnectWithoutFormInput {

    @Field(() => App_RoutingForms_FormResponseWhereUniqueInput, {nullable:false})
    @Type(() => App_RoutingForms_FormResponseWhereUniqueInput)
    where!: App_RoutingForms_FormResponseWhereUniqueInput;

    @Field(() => App_RoutingForms_FormResponseCreateWithoutFormInput, {nullable:false})
    @Type(() => App_RoutingForms_FormResponseCreateWithoutFormInput)
    create!: App_RoutingForms_FormResponseCreateWithoutFormInput;
}
