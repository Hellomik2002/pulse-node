import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { JsonFilter } from '../prisma/json-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { AppRelationFilter } from '../app/app-relation-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { DestinationCalendarListRelationFilter } from '../destination-calendar/destination-calendar-list-relation-filter.input';
import { BoolNullableFilter } from '../prisma/bool-nullable-filter.input';

@InputType()
export class CredentialWhereInput {

    @Field(() => [CredentialWhereInput], {nullable:true})
    AND?: Array<CredentialWhereInput>;

    @Field(() => [CredentialWhereInput], {nullable:true})
    OR?: Array<CredentialWhereInput>;

    @Field(() => [CredentialWhereInput], {nullable:true})
    NOT?: Array<CredentialWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    type?: StringFilter;

    @Field(() => JsonFilter, {nullable:true})
    key?: JsonFilter;

    @Field(() => UserRelationFilter, {nullable:true})
    user?: UserRelationFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    userId?: IntNullableFilter;

    @Field(() => AppRelationFilter, {nullable:true})
    app?: AppRelationFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    appId?: StringNullableFilter;

    @Field(() => DestinationCalendarListRelationFilter, {nullable:true})
    destinationCalendars?: DestinationCalendarListRelationFilter;

    @Field(() => BoolNullableFilter, {nullable:true})
    invalid?: BoolNullableFilter;
}
