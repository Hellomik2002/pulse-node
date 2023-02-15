import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { AttendeeCountAggregate } from './attendee-count-aggregate.output';
import { AttendeeAvgAggregate } from './attendee-avg-aggregate.output';
import { AttendeeSumAggregate } from './attendee-sum-aggregate.output';
import { AttendeeMinAggregate } from './attendee-min-aggregate.output';
import { AttendeeMaxAggregate } from './attendee-max-aggregate.output';

@ObjectType()
export class AggregateAttendee {

    @Field(() => AttendeeCountAggregate, {nullable:true})
    _count?: AttendeeCountAggregate;

    @Field(() => AttendeeAvgAggregate, {nullable:true})
    _avg?: AttendeeAvgAggregate;

    @Field(() => AttendeeSumAggregate, {nullable:true})
    _sum?: AttendeeSumAggregate;

    @Field(() => AttendeeMinAggregate, {nullable:true})
    _min?: AttendeeMinAggregate;

    @Field(() => AttendeeMaxAggregate, {nullable:true})
    _max?: AttendeeMaxAggregate;
}
