import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { App_RoutingForms_FormResponseScalarWhereInput } from './app-routing-forms-form-response-scalar-where.input';
import { Type } from 'class-transformer';
import { App_RoutingForms_FormResponseUpdateManyMutationInput } from './app-routing-forms-form-response-update-many-mutation.input';

@InputType()
export class App_RoutingForms_FormResponseUpdateManyWithWhereWithoutFormInput {

    @Field(() => App_RoutingForms_FormResponseScalarWhereInput, {nullable:false})
    @Type(() => App_RoutingForms_FormResponseScalarWhereInput)
    where!: App_RoutingForms_FormResponseScalarWhereInput;

    @Field(() => App_RoutingForms_FormResponseUpdateManyMutationInput, {nullable:false})
    @Type(() => App_RoutingForms_FormResponseUpdateManyMutationInput)
    data!: App_RoutingForms_FormResponseUpdateManyMutationInput;
}
