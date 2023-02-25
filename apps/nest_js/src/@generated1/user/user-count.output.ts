import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType('CalUserCount')
export class UserCount {

    @Field(() => Int, {nullable:false})
    eventTypes?: number;

    @Field(() => Int, {nullable:false})
    credentials?: number;

    @Field(() => Int, {nullable:false})
    teams?: number;

    @Field(() => Int, {nullable:false})
    bookings?: number;

    @Field(() => Int, {nullable:false})
    schedules?: number;

    @Field(() => Int, {nullable:false})
    selectedCalendars?: number;

    @Field(() => Int, {nullable:false})
    availability?: number;

    @Field(() => Int, {nullable:false})
    webhooks?: number;

    @Field(() => Int, {nullable:false})
    impersonatedUsers?: number;

    @Field(() => Int, {nullable:false})
    impersonatedBy?: number;

    @Field(() => Int, {nullable:false})
    apiKeys?: number;

    @Field(() => Int, {nullable:false})
    accounts?: number;

    @Field(() => Int, {nullable:false})
    sessions?: number;

    @Field(() => Int, {nullable:false})
    Feedback?: number;

    @Field(() => Int, {nullable:false})
    ownedEventTypes?: number;

    @Field(() => Int, {nullable:false})
    workflows?: number;

    @Field(() => Int, {nullable:false})
    routingForms?: number;

    @Field(() => Int, {nullable:false})
    verifiedNumbers?: number;

    @Field(() => Int, {nullable:false})
    hosts?: number;
}
