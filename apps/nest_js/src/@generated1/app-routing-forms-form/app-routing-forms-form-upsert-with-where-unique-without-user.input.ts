import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { App_RoutingForms_FormWhereUniqueInput } from './app-routing-forms-form-where-unique.input';
import { Type } from 'class-transformer';
import { App_RoutingForms_FormUpdateWithoutUserInput } from './app-routing-forms-form-update-without-user.input';
import { App_RoutingForms_FormCreateWithoutUserInput } from './app-routing-forms-form-create-without-user.input';

@InputType()
export class App_RoutingForms_FormUpsertWithWhereUniqueWithoutUserInput {

    @Field(() => App_RoutingForms_FormWhereUniqueInput, {nullable:false})
    @Type(() => App_RoutingForms_FormWhereUniqueInput)
    where!: App_RoutingForms_FormWhereUniqueInput;

    @Field(() => App_RoutingForms_FormUpdateWithoutUserInput, {nullable:false})
    @Type(() => App_RoutingForms_FormUpdateWithoutUserInput)
    update!: App_RoutingForms_FormUpdateWithoutUserInput;

    @Field(() => App_RoutingForms_FormCreateWithoutUserInput, {nullable:false})
    @Type(() => App_RoutingForms_FormCreateWithoutUserInput)
    create!: App_RoutingForms_FormCreateWithoutUserInput;
}
