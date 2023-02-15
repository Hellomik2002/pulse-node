import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { App_RoutingForms_FormWhereInput } from '../app-routing-forms-form/app-routing-forms-form-where.input';
import { Type } from 'class-transformer';
import { App_RoutingForms_FormOrderByWithRelationInput } from '../app-routing-forms-form/app-routing-forms-form-order-by-with-relation.input';
import { App_RoutingForms_FormWhereUniqueInput } from '../app-routing-forms-form/app-routing-forms-form-where-unique.input';
import { Int } from '@nestjs/graphql';
import { App_RoutingForms_FormScalarFieldEnum } from '../app-routing-forms-form/app-routing-forms-form-scalar-field.enum';

@ArgsType()
export class FindManyAppRoutingFormsFormArgs {

    @Field(() => App_RoutingForms_FormWhereInput, {nullable:true})
    @Type(() => App_RoutingForms_FormWhereInput)
    where?: App_RoutingForms_FormWhereInput;

    @Field(() => [App_RoutingForms_FormOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<App_RoutingForms_FormOrderByWithRelationInput>;

    @Field(() => App_RoutingForms_FormWhereUniqueInput, {nullable:true})
    cursor?: App_RoutingForms_FormWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [App_RoutingForms_FormScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof App_RoutingForms_FormScalarFieldEnum>;
}
