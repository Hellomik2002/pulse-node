import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { App_RoutingForms_FormResponseWhereInput } from '../app-routing-forms-form-response/app-routing-forms-form-response-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyAppRoutingFormsFormResponseArgs {

    @Field(() => App_RoutingForms_FormResponseWhereInput, {nullable:true})
    @Type(() => App_RoutingForms_FormResponseWhereInput)
    where?: App_RoutingForms_FormResponseWhereInput;
}
