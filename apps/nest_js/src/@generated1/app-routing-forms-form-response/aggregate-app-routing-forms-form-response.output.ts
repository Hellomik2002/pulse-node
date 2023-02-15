import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { App_RoutingForms_FormResponseCountAggregate } from './app-routing-forms-form-response-count-aggregate.output';
import { App_RoutingForms_FormResponseAvgAggregate } from './app-routing-forms-form-response-avg-aggregate.output';
import { App_RoutingForms_FormResponseSumAggregate } from './app-routing-forms-form-response-sum-aggregate.output';
import { App_RoutingForms_FormResponseMinAggregate } from './app-routing-forms-form-response-min-aggregate.output';
import { App_RoutingForms_FormResponseMaxAggregate } from './app-routing-forms-form-response-max-aggregate.output';

@ObjectType()
export class AggregateApp_RoutingForms_FormResponse {

    @Field(() => App_RoutingForms_FormResponseCountAggregate, {nullable:true})
    _count?: App_RoutingForms_FormResponseCountAggregate;

    @Field(() => App_RoutingForms_FormResponseAvgAggregate, {nullable:true})
    _avg?: App_RoutingForms_FormResponseAvgAggregate;

    @Field(() => App_RoutingForms_FormResponseSumAggregate, {nullable:true})
    _sum?: App_RoutingForms_FormResponseSumAggregate;

    @Field(() => App_RoutingForms_FormResponseMinAggregate, {nullable:true})
    _min?: App_RoutingForms_FormResponseMinAggregate;

    @Field(() => App_RoutingForms_FormResponseMaxAggregate, {nullable:true})
    _max?: App_RoutingForms_FormResponseMaxAggregate;
}
