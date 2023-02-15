import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class UserCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    username!: number;

    @Field(() => Int, {nullable:false})
    name!: number;

    @Field(() => Int, {nullable:false})
    email!: number;

    @Field(() => Int, {nullable:false})
    emailVerified!: number;

    @Field(() => Int, {nullable:false})
    password!: number;

    @Field(() => Int, {nullable:false})
    bio!: number;

    @Field(() => Int, {nullable:false})
    avatar!: number;

    @Field(() => Int, {nullable:false})
    timeZone!: number;

    @Field(() => Int, {nullable:false})
    weekStart!: number;

    @Field(() => Int, {nullable:false})
    startTime!: number;

    @Field(() => Int, {nullable:false})
    endTime!: number;

    @Field(() => Int, {nullable:false})
    bufferTime!: number;

    @Field(() => Int, {nullable:false})
    hideBranding!: number;

    @Field(() => Int, {nullable:false})
    theme!: number;

    @Field(() => Int, {nullable:false})
    createdDate!: number;

    @Field(() => Int, {nullable:false})
    trialEndsAt!: number;

    @Field(() => Int, {nullable:false})
    defaultScheduleId!: number;

    @Field(() => Int, {nullable:false})
    completedOnboarding!: number;

    @Field(() => Int, {nullable:false})
    locale!: number;

    @Field(() => Int, {nullable:false})
    timeFormat!: number;

    @Field(() => Int, {nullable:false})
    twoFactorSecret!: number;

    @Field(() => Int, {nullable:false})
    twoFactorEnabled!: number;

    @Field(() => Int, {nullable:false})
    identityProvider!: number;

    @Field(() => Int, {nullable:false})
    identityProviderId!: number;

    @Field(() => Int, {nullable:false})
    invitedTo!: number;

    @Field(() => Int, {nullable:false})
    brandColor!: number;

    @Field(() => Int, {nullable:false})
    darkBrandColor!: number;

    @Field(() => Int, {nullable:false})
    away!: number;

    @Field(() => Int, {nullable:false})
    allowDynamicBooking!: number;

    @Field(() => Int, {nullable:false})
    metadata!: number;

    @Field(() => Int, {nullable:false})
    verified!: number;

    @Field(() => Int, {nullable:false})
    role!: number;

    @Field(() => Int, {nullable:false})
    disableImpersonation!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
