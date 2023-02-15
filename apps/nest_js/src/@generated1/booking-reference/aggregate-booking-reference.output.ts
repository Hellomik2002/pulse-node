import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { BookingReferenceCountAggregate } from './booking-reference-count-aggregate.output';
import { BookingReferenceAvgAggregate } from './booking-reference-avg-aggregate.output';
import { BookingReferenceSumAggregate } from './booking-reference-sum-aggregate.output';
import { BookingReferenceMinAggregate } from './booking-reference-min-aggregate.output';
import { BookingReferenceMaxAggregate } from './booking-reference-max-aggregate.output';

@ObjectType()
export class AggregateBookingReference {

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
