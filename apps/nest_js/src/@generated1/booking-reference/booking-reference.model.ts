import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Booking } from '../booking/booking.model';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class BookingReference {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    type!: string;

    @Field(() => String, {nullable:false})
    uid!: string;

    @Field(() => String, {nullable:true})
    meetingId!: string | null;

    @Field(() => String, {nullable:true})
    meetingPassword!: string | null;

    @Field(() => String, {nullable:true})
    meetingUrl!: string | null;

    @Field(() => Booking, {nullable:true})
    booking?: Booking | null;

    @Field(() => Int, {nullable:true})
    bookingId!: number | null;

    @Field(() => String, {nullable:true})
    externalCalendarId!: string | null;

    @Field(() => Boolean, {nullable:true})
    deleted!: boolean | null;

    @Field(() => Int, {nullable:true})
    credentialId!: number | null;
}
