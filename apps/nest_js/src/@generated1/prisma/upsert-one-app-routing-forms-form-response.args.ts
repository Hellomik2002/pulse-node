import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { App_RoutingForms_FormResponseWhereUniqueInput } from '../app-routing-forms-form-response/app-routing-forms-form-response-where-unique.input';
import { Type } from 'class-transformer';
import { App_RoutingForms_FormResponseCreateInput } from '../app-routing-forms-form-response/app-routing-forms-form-response-create.input';
import { App_RoutingForms_FormResponseUpdateInput } from '../app-routing-forms-form-response/app-routing-forms-form-response-update.input';

@ArgsType()
export class UpsertOneAppRoutingFormsFormResponseArgs {

    @Field(() => App_RoutingForms_FormResponseWhereUniqueInput, {nullable:false})
    @Type(() => App_RoutingForms_FormResponseWhereUniqueInput)
    where!: App_RoutingForms_FormResponseWhereUniqueInput;

    @Field(() => App_RoutingForms_FormResponseCreateInput, {nullable:false})
    @Type(() => App_RoutingForms_FormResponseCreateInput)
    create!: App_RoutingForms_FormResponseCreateInput;

    @Field(() => App_RoutingForms_FormResponseUpdateInput, {nullable:false})
    @Type(() => App_RoutingForms_FormResponseUpdateInput)
    update!: App_RoutingForms_FormResponseUpdateInput;
}
