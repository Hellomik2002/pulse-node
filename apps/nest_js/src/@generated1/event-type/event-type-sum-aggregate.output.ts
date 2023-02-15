import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class EventTypeSumAggregate {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Int, {nullable:true})
    position?: number;

    @Field(() => Int, {nullable:true})
    length?: number;

    @Field(() => Int, {nullable:true})
    userId?: number;

    @Field(() => Int, {nullable:true})
    teamId?: number;

    @Field(() => Int, {nullable:true})
    periodDays?: number;

    @Field(() => Int, {nullable:true})
    minimumBookingNotice?: number;

    @Field(() => Int, {nullable:true})
    beforeEventBuffer?: number;

    @Field(() => Int, {nullable:true})
    afterEventBuffer?: number;

    @Field(() => Int, {nullable:true})
    seatsPerTimeSlot?: number;

    @Field(() => Int, {nullable:true})
    scheduleId?: number;

    @Field(() => Int, {nullable:true})
    price?: number;

    @Field(() => Int, {nullable:true})
    slotInterval?: number;
}
