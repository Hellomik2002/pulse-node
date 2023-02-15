import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class DestinationCalendarCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    integration!: number;

    @Field(() => Int, {nullable:false})
    externalId!: number;

    @Field(() => Int, {nullable:false})
    userId!: number;

    @Field(() => Int, {nullable:false})
    eventTypeId!: number;

    @Field(() => Int, {nullable:false})
    credentialId!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
