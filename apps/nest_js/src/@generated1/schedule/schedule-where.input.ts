import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';
import { EventTypeListRelationFilter } from '../event-type/event-type-list-relation-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { AvailabilityListRelationFilter } from '../availability/availability-list-relation-filter.input';

@InputType()
export class ScheduleWhereInput {

    @Field(() => [ScheduleWhereInput], {nullable:true})
    AND?: Array<ScheduleWhereInput>;

    @Field(() => [ScheduleWhereInput], {nullable:true})
    OR?: Array<ScheduleWhereInput>;

    @Field(() => [ScheduleWhereInput], {nullable:true})
    NOT?: Array<ScheduleWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => UserRelationFilter, {nullable:true})
    user?: UserRelationFilter;

    @Field(() => IntFilter, {nullable:true})
    userId?: IntFilter;

    @Field(() => EventTypeListRelationFilter, {nullable:true})
    eventType?: EventTypeListRelationFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    timeZone?: StringNullableFilter;

    @Field(() => AvailabilityListRelationFilter, {nullable:true})
    availability?: AvailabilityListRelationFilter;
}
