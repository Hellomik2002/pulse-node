import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class BookingReferenceCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    type!: number;

    @Field(() => Int, {nullable:false})
    uid!: number;

    @Field(() => Int, {nullable:false})
    meetingId!: number;

    @Field(() => Int, {nullable:false})
    meetingPassword!: number;

    @Field(() => Int, {nullable:false})
    meetingUrl!: number;

    @Field(() => Int, {nullable:false})
    bookingId!: number;

    @Field(() => Int, {nullable:false})
    externalCalendarId!: number;

    @Field(() => Int, {nullable:false})
    deleted!: number;

    @Field(() => Int, {nullable:false})
    credentialId!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
