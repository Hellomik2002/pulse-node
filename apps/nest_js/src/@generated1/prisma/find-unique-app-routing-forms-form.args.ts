import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { App_RoutingForms_FormWhereUniqueInput } from '../app-routing-forms-form/app-routing-forms-form-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueAppRoutingFormsFormArgs {

    @Field(() => App_RoutingForms_FormWhereUniqueInput, {nullable:false})
    @Type(() => App_RoutingForms_FormWhereUniqueInput)
    where!: App_RoutingForms_FormWhereUniqueInput;
}
