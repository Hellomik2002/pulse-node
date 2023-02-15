import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { App_RoutingForms_FormCreateInput } from '../app-routing-forms-form/app-routing-forms-form-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneAppRoutingFormsFormArgs {

    @Field(() => App_RoutingForms_FormCreateInput, {nullable:false})
    @Type(() => App_RoutingForms_FormCreateInput)
    data!: App_RoutingForms_FormCreateInput;
}
