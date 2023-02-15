import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { AppCountAggregate } from './app-count-aggregate.output';
import { AppMinAggregate } from './app-min-aggregate.output';
import { AppMaxAggregate } from './app-max-aggregate.output';

@ObjectType()
export class AggregateApp {

    @Field(() => AppCountAggregate, {nullable:true})
    _count?: AppCountAggregate;

    @Field(() => AppMinAggregate, {nullable:true})
    _min?: AppMinAggregate;

    @Field(() => AppMaxAggregate, {nullable:true})
    _max?: AppMaxAggregate;
}
