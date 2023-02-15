import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { IdentityProvider } from '../prisma/identity-provider.enum';
import { GraphQLJSON } from 'graphql-type-json';
import { UserPermissionRole } from './user-permission-role.enum';
import { UserCountAggregate } from './user-count-aggregate.output';
import { UserAvgAggregate } from './user-avg-aggregate.output';
import { UserSumAggregate } from './user-sum-aggregate.output';
import { UserMinAggregate } from './user-min-aggregate.output';
import { UserMaxAggregate } from './user-max-aggregate.output';

@ObjectType()
export class UserGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:true})
    username?: string;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => String, {nullable:false})
    email!: string;

    @Field(() => Date, {nullable:true})
    emailVerified?: Date | string;

    @Field(() => String, {nullable:true})
    password?: string;

    @Field(() => String, {nullable:true})
    bio?: string;

    @Field(() => String, {nullable:true})
    avatar?: string;

    @Field(() => String, {nullable:false})
    timeZone!: string;

    @Field(() => String, {nullable:false})
    weekStart!: string;

    @Field(() => Int, {nullable:false})
    startTime!: number;

    @Field(() => Int, {nullable:false})
    endTime!: number;

    @Field(() => Int, {nullable:false})
    bufferTime!: number;

    @Field(() => Boolean, {nullable:false})
    hideBranding!: boolean;

    @Field(() => String, {nullable:true})
    theme?: string;

    @Field(() => Date, {nullable:false})
    createdDate!: Date | string;

    @Field(() => Date, {nullable:true})
    trialEndsAt?: Date | string;

    @Field(() => Int, {nullable:true})
    defaultScheduleId?: number;

    @Field(() => Boolean, {nullable:false})
    completedOnboarding!: boolean;

    @Field(() => String, {nullable:true})
    locale?: string;

    @Field(() => Int, {nullable:true})
    timeFormat?: number;

    @Field(() => String, {nullable:true})
    twoFactorSecret?: string;

    @Field(() => Boolean, {nullable:false})
    twoFactorEnabled!: boolean;

    @Field(() => IdentityProvider, {nullable:false})
    identityProvider!: keyof typeof IdentityProvider;

    @Field(() => String, {nullable:true})
    identityProviderId?: string;

    @Field(() => Int, {nullable:true})
    invitedTo?: number;

    @Field(() => String, {nullable:false})
    brandColor!: string;

    @Field(() => String, {nullable:false})
    darkBrandColor!: string;

    @Field(() => Boolean, {nullable:false})
    away!: boolean;

    @Field(() => Boolean, {nullable:true})
    allowDynamicBooking?: boolean;

    @Field(() => GraphQLJSON, {nullable:true})
    metadata?: any;

    @Field(() => Boolean, {nullable:true})
    verified?: boolean;

    @Field(() => UserPermissionRole, {nullable:false})
    role!: keyof typeof UserPermissionRole;

    @Field(() => Boolean, {nullable:false})
    disableImpersonation!: boolean;

    @Field(() => UserCountAggregate, {nullable:true})
    _count?: UserCountAggregate;

    @Field(() => UserAvgAggregate, {nullable:true})
    _avg?: UserAvgAggregate;

    @Field(() => UserSumAggregate, {nullable:true})
    _sum?: UserSumAggregate;

    @Field(() => UserMinAggregate, {nullable:true})
    _min?: UserMinAggregate;

    @Field(() => UserMaxAggregate, {nullable:true})
    _max?: UserMaxAggregate;
}
