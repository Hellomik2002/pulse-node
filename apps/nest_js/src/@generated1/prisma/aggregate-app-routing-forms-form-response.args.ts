import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { App_RoutingForms_FormResponseWhereInput } from '../app-routing-forms-form-response/app-routing-forms-form-response-where.input';
import { Type } from 'class-transformer';
import { App_RoutingForms_FormResponseOrderByWithRelationInput } from '../app-routing-forms-form-response/app-routing-forms-form-response-order-by-with-relation.input';
import { App_RoutingForms_FormResponseWhereUniqueInput } from '../app-routing-forms-form-response/app-routing-forms-form-response-where-unique.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class AggregateAppRoutingFormsFormResponseArgs {

    @Field(() => App_RoutingForms_FormResponseWhereInput, {nullable:true})
    @Type(() => App_RoutingForms_FormResponseWhereInput)
    where?: App_RoutingForms_FormResponseWhereInput;

    @Field(() => [App_RoutingForms_FormResponseOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<App_RoutingForms_FormResponseOrderByWithRelationInput>;

    @Field(() => App_RoutingForms_FormResponseWhereUniqueInput, {nullable:true})
    cursor?: App_RoutingForms_FormResponseWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
