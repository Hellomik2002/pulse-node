import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { App_RoutingForms_FormUpdateInput } from '../app-routing-forms-form/app-routing-forms-form-update.input';
import { Type } from 'class-transformer';
import { App_RoutingForms_FormWhereUniqueInput } from '../app-routing-forms-form/app-routing-forms-form-where-unique.input';

@ArgsType()
export class UpdateOneAppRoutingFormsFormArgs {

    @Field(() => App_RoutingForms_FormUpdateInput, {nullable:false})
    @Type(() => App_RoutingForms_FormUpdateInput)
    data!: App_RoutingForms_FormUpdateInput;

    @Field(() => App_RoutingForms_FormWhereUniqueInput, {nullable:false})
    @Type(() => App_RoutingForms_FormWhereUniqueInput)
    where!: App_RoutingForms_FormWhereUniqueInput;
}
