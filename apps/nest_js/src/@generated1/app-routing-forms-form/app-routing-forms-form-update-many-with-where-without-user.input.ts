import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { App_RoutingForms_FormScalarWhereInput } from './app-routing-forms-form-scalar-where.input';
import { Type } from 'class-transformer';
import { App_RoutingForms_FormUpdateManyMutationInput } from './app-routing-forms-form-update-many-mutation.input';

@InputType()
export class App_RoutingForms_FormUpdateManyWithWhereWithoutUserInput {

    @Field(() => App_RoutingForms_FormScalarWhereInput, {nullable:false})
    @Type(() => App_RoutingForms_FormScalarWhereInput)
    where!: App_RoutingForms_FormScalarWhereInput;

    @Field(() => App_RoutingForms_FormUpdateManyMutationInput, {nullable:false})
    @Type(() => App_RoutingForms_FormUpdateManyMutationInput)
    data!: App_RoutingForms_FormUpdateManyMutationInput;
}
