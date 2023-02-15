import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { App_RoutingForms_FormResponseUpdateInput } from '../app-routing-forms-form-response/app-routing-forms-form-response-update.input';
import { Type } from 'class-transformer';
import { App_RoutingForms_FormResponseWhereUniqueInput } from '../app-routing-forms-form-response/app-routing-forms-form-response-where-unique.input';

@ArgsType()
export class UpdateOneAppRoutingFormsFormResponseArgs {

    @Field(() => App_RoutingForms_FormResponseUpdateInput, {nullable:false})
    @Type(() => App_RoutingForms_FormResponseUpdateInput)
    data!: App_RoutingForms_FormResponseUpdateInput;

    @Field(() => App_RoutingForms_FormResponseWhereUniqueInput, {nullable:false})
    @Type(() => App_RoutingForms_FormResponseWhereUniqueInput)
    where!: App_RoutingForms_FormResponseWhereUniqueInput;
}
