import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { User } from '../user/user.model';
import { Int } from '@nestjs/graphql';
import { EventType } from '../event-type/event-type.model';
import { Availability } from '../availability/availability.model';
import { ScheduleCount } from './schedule-count.output';

@ObjectType()
export class Schedule {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => User, {nullable:false})
    user?: User;

    @Field(() => Int, {nullable:false})
    userId!: number;

    @Field(() => [EventType], {nullable:true})
    eventType?: Array<EventType>;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:true})
    timeZone!: string | null;

    @Field(() => [Availability], {nullable:true})
    availability?: Array<Availability>;

    @Field(() => ScheduleCount, {nullable:false})
    _count?: ScheduleCount;
}
