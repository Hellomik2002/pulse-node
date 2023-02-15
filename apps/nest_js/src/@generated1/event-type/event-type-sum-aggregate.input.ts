import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class EventTypeSumAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    position?: true;

    @Field(() => Boolean, {nullable:true})
    length?: true;

    @Field(() => Boolean, {nullable:true})
    userId?: true;

    @Field(() => Boolean, {nullable:true})
    teamId?: true;

    @Field(() => Boolean, {nullable:true})
    periodDays?: true;

    @Field(() => Boolean, {nullable:true})
    minimumBookingNotice?: true;

    @Field(() => Boolean, {nullable:true})
    beforeEventBuffer?: true;

    @Field(() => Boolean, {nullable:true})
    afterEventBuffer?: true;

    @Field(() => Boolean, {nullable:true})
    seatsPerTimeSlot?: true;

    @Field(() => Boolean, {nullable:true})
    scheduleId?: true;

    @Field(() => Boolean, {nullable:true})
    price?: true;

    @Field(() => Boolean, {nullable:true})
    slotInterval?: true;
}
