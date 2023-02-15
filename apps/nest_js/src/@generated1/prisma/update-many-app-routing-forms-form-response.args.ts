import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { App_RoutingForms_FormResponseUpdateManyMutationInput } from '../app-routing-forms-form-response/app-routing-forms-form-response-update-many-mutation.input';
import { Type } from 'class-transformer';
import { App_RoutingForms_FormResponseWhereInput } from '../app-routing-forms-form-response/app-routing-forms-form-response-where.input';

@ArgsType()
export class UpdateManyAppRoutingFormsFormResponseArgs {

    @Field(() => App_RoutingForms_FormResponseUpdateManyMutationInput, {nullable:false})
    @Type(() => App_RoutingForms_FormResponseUpdateManyMutationInput)
    data!: App_RoutingForms_FormResponseUpdateManyMutationInput;

    @Field(() => App_RoutingForms_FormResponseWhereInput, {nullable:true})
    @Type(() => App_RoutingForms_FormResponseWhereInput)
    where?: App_RoutingForms_FormResponseWhereInput;
}
