import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { Int } from '@nestjs/graphql';
import { App_RoutingForms_FormCountAggregate } from './app-routing-forms-form-count-aggregate.output';
import { App_RoutingForms_FormAvgAggregate } from './app-routing-forms-form-avg-aggregate.output';
import { App_RoutingForms_FormSumAggregate } from './app-routing-forms-form-sum-aggregate.output';
import { App_RoutingForms_FormMinAggregate } from './app-routing-forms-form-min-aggregate.output';
import { App_RoutingForms_FormMaxAggregate } from './app-routing-forms-form-max-aggregate.output';

@ObjectType()
export class App_RoutingForms_FormGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => GraphQLJSON, {nullable:true})
    routes?: any;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => GraphQLJSON, {nullable:true})
    fields?: any;

    @Field(() => Int, {nullable:false})
    userId!: number;

    @Field(() => Boolean, {nullable:false})
    disabled!: boolean;

    @Field(() => GraphQLJSON, {nullable:true})
    settings?: any;

    @Field(() => App_RoutingForms_FormCountAggregate, {nullable:true})
    _count?: App_RoutingForms_FormCountAggregate;

    @Field(() => App_RoutingForms_FormAvgAggregate, {nullable:true})
    _avg?: App_RoutingForms_FormAvgAggregate;

    @Field(() => App_RoutingForms_FormSumAggregate, {nullable:true})
    _sum?: App_RoutingForms_FormSumAggregate;

    @Field(() => App_RoutingForms_FormMinAggregate, {nullable:true})
    _min?: App_RoutingForms_FormMinAggregate;

    @Field(() => App_RoutingForms_FormMaxAggregate, {nullable:true})
    _max?: App_RoutingForms_FormMaxAggregate;
}
