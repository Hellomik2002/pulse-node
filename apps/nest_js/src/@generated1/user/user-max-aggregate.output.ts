import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { IdentityProvider } from '../prisma/identity-provider.enum';
import { UserPermissionRole } from './user-permission-role.enum';

@ObjectType()
export class UserMaxAggregate {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:true})
    username?: string;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => String, {nullable:true})
    email?: string;

    @Field(() => Date, {nullable:true})
    emailVerified?: Date | string;

    @Field(() => String, {nullable:true})
    password?: string;

    @Field(() => String, {nullable:true})
    bio?: string;

    @Field(() => String, {nullable:true})
    avatar?: string;

    @Field(() => String, {nullable:true})
    timeZone?: string;

    @Field(() => String, {nullable:true})
    weekStart?: string;

    @Field(() => Int, {nullable:true})
    startTime?: number;

    @Field(() => Int, {nullable:true})
    endTime?: number;

    @Field(() => Int, {nullable:true})
    bufferTime?: number;

    @Field(() => Boolean, {nullable:true})
    hideBranding?: boolean;

    @Field(() => String, {nullable:true})
    theme?: string;

    @Field(() => Date, {nullable:true})
    createdDate?: Date | string;

    @Field(() => Date, {nullable:true})
    trialEndsAt?: Date | string;

    @Field(() => Int, {nullable:true})
    defaultScheduleId?: number;

    @Field(() => Boolean, {nullable:true})
    completedOnboarding?: boolean;

    @Field(() => String, {nullable:true})
    locale?: string;

    @Field(() => Int, {nullable:true})
    timeFormat?: number;

    @Field(() => String, {nullable:true})
    twoFactorSecret?: string;

    @Field(() => Boolean, {nullable:true})
    twoFactorEnabled?: boolean;

    @Field(() => IdentityProvider, {nullable:true})
    identityProvider?: keyof typeof IdentityProvider;

    @Field(() => String, {nullable:true})
    identityProviderId?: string;

    @Field(() => Int, {nullable:true})
    invitedTo?: number;

    @Field(() => String, {nullable:true})
    brandColor?: string;

    @Field(() => String, {nullable:true})
    darkBrandColor?: string;

    @Field(() => Boolean, {nullable:true})
    away?: boolean;

    @Field(() => Boolean, {nullable:true})
    allowDynamicBooking?: boolean;

    @Field(() => Boolean, {nullable:true})
    verified?: boolean;

    @Field(() => UserPermissionRole, {nullable:true})
    role?: keyof typeof UserPermissionRole;

    @Field(() => Boolean, {nullable:true})
    disableImpersonation?: boolean;
}
