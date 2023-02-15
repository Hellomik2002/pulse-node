import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { BookingListRelationFilter } from '../booking/booking-list-relation-filter.input';
import { EventTypeRelationFilter } from '../event-type/event-type-relation-filter.input';
import { CredentialRelationFilter } from '../credential/credential-relation-filter.input';

@InputType()
export class DestinationCalendarWhereInput {

    @Field(() => [DestinationCalendarWhereInput], {nullable:true})
    AND?: Array<DestinationCalendarWhereInput>;

    @Field(() => [DestinationCalendarWhereInput], {nullable:true})
    OR?: Array<DestinationCalendarWhereInput>;

    @Field(() => [DestinationCalendarWhereInput], {nullable:true})
    NOT?: Array<DestinationCalendarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    integration?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    externalId?: StringFilter;

    @Field(() => UserRelationFilter, {nullable:true})
    user?: UserRelationFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    userId?: IntNullableFilter;

    @Field(() => BookingListRelationFilter, {nullable:true})
    booking?: BookingListRelationFilter;

    @Field(() => EventTypeRelationFilter, {nullable:true})
    eventType?: EventTypeRelationFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    eventTypeId?: IntNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    credentialId?: IntNullableFilter;

    @Field(() => CredentialRelationFilter, {nullable:true})
    credential?: CredentialRelationFilter;
}
