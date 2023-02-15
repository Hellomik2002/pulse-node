import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class SelectedCalendarCountAggregate {

    @Field(() => Int, {nullable:false})
    userId!: number;

    @Field(() => Int, {nullable:false})
    integration!: number;

    @Field(() => Int, {nullable:false})
    externalId!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
