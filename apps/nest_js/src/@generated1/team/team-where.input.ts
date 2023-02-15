import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { MembershipListRelationFilter } from '../membership/membership-list-relation-filter.input';
import { EventTypeListRelationFilter } from '../event-type/event-type-list-relation-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { JsonNullableFilter } from '../prisma/json-nullable-filter.input';

@InputType()
export class TeamWhereInput {

    @Field(() => [TeamWhereInput], {nullable:true})
    AND?: Array<TeamWhereInput>;

    @Field(() => [TeamWhereInput], {nullable:true})
    OR?: Array<TeamWhereInput>;

    @Field(() => [TeamWhereInput], {nullable:true})
    NOT?: Array<TeamWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    slug?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    logo?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    bio?: StringNullableFilter;

    @Field(() => BoolFilter, {nullable:true})
    hideBranding?: BoolFilter;

    @Field(() => BoolFilter, {nullable:true})
    hideBookATeamMember?: BoolFilter;

    @Field(() => MembershipListRelationFilter, {nullable:true})
    members?: MembershipListRelationFilter;

    @Field(() => EventTypeListRelationFilter, {nullable:true})
    eventTypes?: EventTypeListRelationFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => JsonNullableFilter, {nullable:true})
    metadata?: JsonNullableFilter;
}
