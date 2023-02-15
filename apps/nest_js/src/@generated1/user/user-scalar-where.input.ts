import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { EnumIdentityProviderFilter } from '../prisma/enum-identity-provider-filter.input';
import { BoolNullableFilter } from '../prisma/bool-nullable-filter.input';
import { JsonNullableFilter } from '../prisma/json-nullable-filter.input';
import { EnumUserPermissionRoleFilter } from '../prisma/enum-user-permission-role-filter.input';

@InputType()
export class UserScalarWhereInput {

    @Field(() => [UserScalarWhereInput], {nullable:true})
    AND?: Array<UserScalarWhereInput>;

    @Field(() => [UserScalarWhereInput], {nullable:true})
    OR?: Array<UserScalarWhereInput>;

    @Field(() => [UserScalarWhereInput], {nullable:true})
    NOT?: Array<UserScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    username?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    name?: StringNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    email?: StringFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    emailVerified?: DateTimeNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    password?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    bio?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    avatar?: StringNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    timeZone?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    weekStart?: StringFilter;

    @Field(() => IntFilter, {nullable:true})
    startTime?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    endTime?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    bufferTime?: IntFilter;

    @Field(() => BoolFilter, {nullable:true})
    hideBranding?: BoolFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    theme?: StringNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdDate?: DateTimeFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    trialEndsAt?: DateTimeNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    defaultScheduleId?: IntNullableFilter;

    @Field(() => BoolFilter, {nullable:true})
    completedOnboarding?: BoolFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    locale?: StringNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    timeFormat?: IntNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    twoFactorSecret?: StringNullableFilter;

    @Field(() => BoolFilter, {nullable:true})
    twoFactorEnabled?: BoolFilter;

    @Field(() => EnumIdentityProviderFilter, {nullable:true})
    identityProvider?: EnumIdentityProviderFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    identityProviderId?: StringNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    invitedTo?: IntNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    brandColor?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    darkBrandColor?: StringFilter;

    @Field(() => BoolFilter, {nullable:true})
    away?: BoolFilter;

    @Field(() => BoolNullableFilter, {nullable:true})
    allowDynamicBooking?: BoolNullableFilter;

    @Field(() => JsonNullableFilter, {nullable:true})
    metadata?: JsonNullableFilter;

    @Field(() => BoolNullableFilter, {nullable:true})
    verified?: BoolNullableFilter;

    @Field(() => EnumUserPermissionRoleFilter, {nullable:true})
    role?: EnumUserPermissionRoleFilter;

    @Field(() => BoolFilter, {nullable:true})
    disableImpersonation?: BoolFilter;
}
