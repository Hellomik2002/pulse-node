import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { App_RoutingForms_FormWhereInput } from '../app-routing-forms-form/app-routing-forms-form-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyAppRoutingFormsFormArgs {

    @Field(() => App_RoutingForms_FormWhereInput, {nullable:true})
    @Type(() => App_RoutingForms_FormWhereInput)
    where?: App_RoutingForms_FormWhereInput;
}
