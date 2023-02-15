import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class AvailabilityAvgAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    userId?: true;

    @Field(() => Boolean, {nullable:true})
    eventTypeId?: true;

    @Field(() => Boolean, {nullable:true})
    days?: true;

    @Field(() => Boolean, {nullable:true})
    scheduleId?: true;
}
