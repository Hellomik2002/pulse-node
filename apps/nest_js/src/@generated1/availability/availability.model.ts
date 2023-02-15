import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { User } from '../user/user.model';
import { Int } from '@nestjs/graphql';
import { EventType } from '../event-type/event-type.model';
import { Schedule } from '../schedule/schedule.model';

@ObjectType()
export class Availability {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => User, {nullable:true})
    user?: User | null;

    @Field(() => Int, {nullable:true})
    userId!: number | null;

    @Field(() => EventType, {nullable:true})
    eventType?: EventType | null;

    @Field(() => Int, {nullable:true})
    eventTypeId!: number | null;

    @Field(() => [Int], {nullable:true})
    days!: Array<number>;

    @Field(() => Date, {nullable:false})
    startTime!: Date;

    @Field(() => Date, {nullable:false})
    endTime!: Date;

    @Field(() => Date, {nullable:true})
    date!: Date | null;

    @Field(() => Schedule, {nullable:true})
    Schedule?: Schedule | null;

    @Field(() => Int, {nullable:true})
    scheduleId!: number | null;
}
