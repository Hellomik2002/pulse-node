import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class EventTypeCustomInputCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    eventTypeId!: number;

    @Field(() => Int, {nullable:false})
    label!: number;

    @Field(() => Int, {nullable:false})
    type!: number;

    @Field(() => Int, {nullable:false})
    options!: number;

    @Field(() => Int, {nullable:false})
    required!: number;

    @Field(() => Int, {nullable:false})
    placeholder!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
