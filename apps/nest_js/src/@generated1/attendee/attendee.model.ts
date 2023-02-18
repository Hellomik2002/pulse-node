import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Booking } from '../booking/booking.model';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class Attendee {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    email!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    timeZone!: string;

    @Field(() => String, {nullable:true})
    pulseUserId!: string | null;

    @Field(() => String, {nullable:true,defaultValue:'en'})
    locale!: string | null;

    @Field(() => Booking, {nullable:true})
    booking?: Booking | null;

    @Field(() => Int, {nullable:true})
    bookingId!: number | null;
}
