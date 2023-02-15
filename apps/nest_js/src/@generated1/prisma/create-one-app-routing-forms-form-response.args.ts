import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { App_RoutingForms_FormResponseCreateInput } from '../app-routing-forms-form-response/app-routing-forms-form-response-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneAppRoutingFormsFormResponseArgs {

    @Field(() => App_RoutingForms_FormResponseCreateInput, {nullable:false})
    @Type(() => App_RoutingForms_FormResponseCreateInput)
    data!: App_RoutingForms_FormResponseCreateInput;
}
