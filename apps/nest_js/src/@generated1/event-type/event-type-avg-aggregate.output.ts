import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class EventTypeAvgAggregate {

    @Field(() => Float, {nullable:true})
    id?: number;

    @Field(() => Float, {nullable:true})
    position?: number;

    @Field(() => Float, {nullable:true})
    length?: number;

    @Field(() => Float, {nullable:true})
    userId?: number;

    @Field(() => Float, {nullable:true})
    teamId?: number;

    @Field(() => Float, {nullable:true})
    periodDays?: number;

    @Field(() => Float, {nullable:true})
    minimumBookingNotice?: number;

    @Field(() => Float, {nullable:true})
    beforeEventBuffer?: number;

    @Field(() => Float, {nullable:true})
    afterEventBuffer?: number;

    @Field(() => Float, {nullable:true})
    seatsPerTimeSlot?: number;

    @Field(() => Float, {nullable:true})
    scheduleId?: number;

    @Field(() => Float, {nullable:true})
    price?: number;

    @Field(() => Float, {nullable:true})
    slotInterval?: number;
}
