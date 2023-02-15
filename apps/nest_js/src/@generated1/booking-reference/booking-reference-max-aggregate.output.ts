import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class BookingReferenceMaxAggregate {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:true})
    type?: string;

    @Field(() => String, {nullable:true})
    uid?: string;

    @Field(() => String, {nullable:true})
    meetingId?: string;

    @Field(() => String, {nullable:true})
    meetingPassword?: string;

    @Field(() => String, {nullable:true})
    meetingUrl?: string;

    @Field(() => Int, {nullable:true})
    bookingId?: number;

    @Field(() => String, {nullable:true})
    externalCalendarId?: string;

    @Field(() => Boolean, {nullable:true})
    deleted?: boolean;

    @Field(() => Int, {nullable:true})
    credentialId?: number;
}
