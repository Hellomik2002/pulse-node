import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class AvailabilitySumAggregate {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Int, {nullable:true})
    userId?: number;

    @Field(() => Int, {nullable:true})
    eventTypeId?: number;

    @Field(() => [Int], {nullable:true})
    days?: Array<number>;

    @Field(() => Int, {nullable:true})
    scheduleId?: number;
}
