import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class AvailabilityAvgAggregate {

    @Field(() => Float, {nullable:true})
    id?: number;

    @Field(() => Float, {nullable:true})
    userId?: number;

    @Field(() => Float, {nullable:true})
    eventTypeId?: number;

    @Field(() => Float, {nullable:true})
    days?: number;

    @Field(() => Float, {nullable:true})
    scheduleId?: number;
}
