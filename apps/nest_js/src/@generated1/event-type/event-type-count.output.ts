import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class EventTypeCount {

    @Field(() => Int, {nullable:false})
    hosts?: number;

    @Field(() => Int, {nullable:false})
    users?: number;

    @Field(() => Int, {nullable:false})
    bookings?: number;

    @Field(() => Int, {nullable:false})
    availability?: number;

    @Field(() => Int, {nullable:false})
    webhooks?: number;

    @Field(() => Int, {nullable:false})
    customInputs?: number;

    @Field(() => Int, {nullable:false})
    workflows?: number;
}
