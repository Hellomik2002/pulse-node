import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { App_RoutingForms_FormResponseWhereUniqueInput } from '../app-routing-forms-form-response/app-routing-forms-form-response-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueAppRoutingFormsFormResponseArgs {

    @Field(() => App_RoutingForms_FormResponseWhereUniqueInput, {nullable:false})
    @Type(() => App_RoutingForms_FormResponseWhereUniqueInput)
    where!: App_RoutingForms_FormResponseWhereUniqueInput;
}
