import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class UserMaxAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    username?: true;

    @Field(() => Boolean, {nullable:true})
    name?: true;

    @Field(() => Boolean, {nullable:true})
    email?: true;

    @Field(() => Boolean, {nullable:true})
    emailVerified?: true;

    @Field(() => Boolean, {nullable:true})
    password?: true;

    @Field(() => Boolean, {nullable:true})
    bio?: true;

    @Field(() => Boolean, {nullable:true})
    avatar?: true;

    @Field(() => Boolean, {nullable:true})
    timeZone?: true;

    @Field(() => Boolean, {nullable:true})
    weekStart?: true;

    @Field(() => Boolean, {nullable:true})
    startTime?: true;

    @Field(() => Boolean, {nullable:true})
    endTime?: true;

    @Field(() => Boolean, {nullable:true})
    bufferTime?: true;

    @Field(() => Boolean, {nullable:true})
    hideBranding?: true;

    @Field(() => Boolean, {nullable:true})
    theme?: true;

    @Field(() => Boolean, {nullable:true})
    createdDate?: true;

    @Field(() => Boolean, {nullable:true})
    trialEndsAt?: true;

    @Field(() => Boolean, {nullable:true})
    defaultScheduleId?: true;

    @Field(() => Boolean, {nullable:true})
    completedOnboarding?: true;

    @Field(() => Boolean, {nullable:true})
    locale?: true;

    @Field(() => Boolean, {nullable:true})
    timeFormat?: true;

    @Field(() => Boolean, {nullable:true})
    twoFactorSecret?: true;

    @Field(() => Boolean, {nullable:true})
    twoFactorEnabled?: true;

    @Field(() => Boolean, {nullable:true})
    identityProvider?: true;

    @Field(() => Boolean, {nullable:true})
    identityProviderId?: true;

    @Field(() => Boolean, {nullable:true})
    invitedTo?: true;

    @Field(() => Boolean, {nullable:true})
    brandColor?: true;

    @Field(() => Boolean, {nullable:true})
    darkBrandColor?: true;

    @Field(() => Boolean, {nullable:true})
    away?: true;

    @Field(() => Boolean, {nullable:true})
    allowDynamicBooking?: true;

    @Field(() => Boolean, {nullable:true})
    verified?: true;

    @Field(() => Boolean, {nullable:true})
    role?: true;

    @Field(() => Boolean, {nullable:true})
    disableImpersonation?: true;
}
