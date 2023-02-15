import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { App_RoutingForms_FormWhereUniqueInput } from '../app-routing-forms-form/app-routing-forms-form-where-unique.input';
import { Type } from 'class-transformer';
import { App_RoutingForms_FormCreateInput } from '../app-routing-forms-form/app-routing-forms-form-create.input';
import { App_RoutingForms_FormUpdateInput } from '../app-routing-forms-form/app-routing-forms-form-update.input';

@ArgsType()
export class UpsertOneAppRoutingFormsFormArgs {

    @Field(() => App_RoutingForms_FormWhereUniqueInput, {nullable:false})
    @Type(() => App_RoutingForms_FormWhereUniqueInput)
    where!: App_RoutingForms_FormWhereUniqueInput;

    @Field(() => App_RoutingForms_FormCreateInput, {nullable:false})
    @Type(() => App_RoutingForms_FormCreateInput)
    create!: App_RoutingForms_FormCreateInput;

    @Field(() => App_RoutingForms_FormUpdateInput, {nullable:false})
    @Type(() => App_RoutingForms_FormUpdateInput)
    update!: App_RoutingForms_FormUpdateInput;
}
