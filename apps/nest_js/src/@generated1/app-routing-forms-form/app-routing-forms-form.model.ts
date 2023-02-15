import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { User } from '../user/user.model';
import { Int } from '@nestjs/graphql';
import { App_RoutingForms_FormResponse } from '../app-routing-forms-form-response/app-routing-forms-form-response.model';
import { App_RoutingForms_FormCount } from './app-routing-forms-form-count.output';

@ObjectType()
export class App_RoutingForms_Form {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:true})
    description!: string | null;

    @Field(() => GraphQLJSON, {nullable:true})
    routes!: any | null;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => GraphQLJSON, {nullable:true})
    fields!: any | null;

    @Field(() => User, {nullable:false})
    user?: User;

    @Field(() => Int, {nullable:false})
    userId!: number;

    @Field(() => [App_RoutingForms_FormResponse], {nullable:true})
    responses?: Array<App_RoutingForms_FormResponse>;

    @Field(() => Boolean, {nullable:false,defaultValue:false})
    disabled!: boolean;

    @Field(() => GraphQLJSON, {nullable:true})
    settings!: any | null;

    @Field(() => App_RoutingForms_FormCount, {nullable:false})
    _count?: App_RoutingForms_FormCount;
}
