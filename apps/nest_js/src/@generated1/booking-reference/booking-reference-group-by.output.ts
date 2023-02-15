import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { BookingReferenceCountAggregate } from './booking-reference-count-aggregate.output';
import { BookingReferenceAvgAggregate } from './booking-reference-avg-aggregate.output';
import { BookingReferenceSumAggregate } from './booking-reference-sum-aggregate.output';
import { BookingReferenceMinAggregate } from './booking-reference-min-aggregate.output';
import { BookingReferenceMaxAggregate } from './booking-reference-max-aggregate.output';

@ObjectType()
export class BookingReferenceGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    type!: string;

    @Field(() => String, {nullable:false})
    uid!: string;

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

    @Field(() => BookingReferenceCountAggregate, {nullable:true})
    _count?: BookingReferenceCountAggregate;

    @Field(() => BookingReferenceAvgAggregate, {nullable:true})
    _avg?: BookingReferenceAvgAggregate;

    @Field(() => BookingReferenceSumAggregate, {nullable:true})
    _sum?: BookingReferenceSumAggregate;

    @Field(() => BookingReferenceMinAggregate, {nullable:true})
    _min?: BookingReferenceMinAggregate;

    @Field(() => BookingReferenceMaxAggregate, {nullable:true})
    _max?: BookingReferenceMaxAggregate;
}
