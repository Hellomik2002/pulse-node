import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { App_RoutingForms_FormUpdateManyMutationInput } from '../app-routing-forms-form/app-routing-forms-form-update-many-mutation.input';
import { Type } from 'class-transformer';
import { App_RoutingForms_FormWhereInput } from '../app-routing-forms-form/app-routing-forms-form-where.input';

@ArgsType()
export class UpdateManyAppRoutingFormsFormArgs {

    @Field(() => App_RoutingForms_FormUpdateManyMutationInput, {nullable:false})
    @Type(() => App_RoutingForms_FormUpdateManyMutationInput)
    data!: App_RoutingForms_FormUpdateManyMutationInput;

    @Field(() => App_RoutingForms_FormWhereInput, {nullable:true})
    @Type(() => App_RoutingForms_FormWhereInput)
    where?: App_RoutingForms_FormWhereInput;
}
