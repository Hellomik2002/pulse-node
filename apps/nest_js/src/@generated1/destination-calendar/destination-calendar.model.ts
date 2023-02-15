import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { User } from '../user/user.model';
import { Int } from '@nestjs/graphql';
import { Booking } from '../booking/booking.model';
import { EventType } from '../event-type/event-type.model';
import { Credential } from '../credential/credential.model';
import { DestinationCalendarCount } from './destination-calendar-count.output';

@ObjectType()
export class DestinationCalendar {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    integration!: string;

    @Field(() => String, {nullable:false})
    externalId!: string;

    @Field(() => User, {nullable:true})
    user?: User | null;

    @Field(() => Int, {nullable:true})
    userId!: number | null;

    @Field(() => [Booking], {nullable:true})
    booking?: Array<Booking>;

    @Field(() => EventType, {nullable:true})
    eventType?: EventType | null;

    @Field(() => Int, {nullable:true})
    eventTypeId!: number | null;

    @Field(() => Int, {nullable:true})
    credentialId!: number | null;

    @Field(() => Credential, {nullable:true})
    credential?: Credential | null;

    @Field(() => DestinationCalendarCount, {nullable:false})
    _count?: DestinationCalendarCount;
}
