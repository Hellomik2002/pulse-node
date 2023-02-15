import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { EventTypeRelationFilter } from '../event-type/event-type-relation-filter.input';
import { IntNullableListFilter } from '../prisma/int-nullable-list-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { ScheduleRelationFilter } from '../schedule/schedule-relation-filter.input';

@InputType()
export class AvailabilityWhereInput {

    @Field(() => [AvailabilityWhereInput], {nullable:true})
    AND?: Array<AvailabilityWhereInput>;

    @Field(() => [AvailabilityWhereInput], {nullable:true})
    OR?: Array<AvailabilityWhereInput>;

    @Field(() => [AvailabilityWhereInput], {nullable:true})
    NOT?: Array<AvailabilityWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => UserRelationFilter, {nullable:true})
    user?: UserRelationFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    userId?: IntNullableFilter;

    @Field(() => EventTypeRelationFilter, {nullable:true})
    eventType?: EventTypeRelationFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    eventTypeId?: IntNullableFilter;

    @Field(() => IntNullableListFilter, {nullable:true})
    days?: IntNullableListFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    startTime?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    endTime?: DateTimeFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    date?: DateTimeNullableFilter;

    @Field(() => ScheduleRelationFilter, {nullable:true})
    Schedule?: ScheduleRelationFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    scheduleId?: IntNullableFilter;
}
