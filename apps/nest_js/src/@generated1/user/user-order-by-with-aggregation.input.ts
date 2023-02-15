import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { UserCountOrderByAggregateInput } from './user-count-order-by-aggregate.input';
import { UserAvgOrderByAggregateInput } from './user-avg-order-by-aggregate.input';
import { UserMaxOrderByAggregateInput } from './user-max-order-by-aggregate.input';
import { UserMinOrderByAggregateInput } from './user-min-order-by-aggregate.input';
import { UserSumOrderByAggregateInput } from './user-sum-order-by-aggregate.input';

@InputType()
export class UserOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    username?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    email?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    emailVerified?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    password?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    bio?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    avatar?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    timeZone?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    weekStart?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    startTime?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    endTime?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    bufferTime?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    hideBranding?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    theme?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdDate?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    trialEndsAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    defaultScheduleId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    completedOnboarding?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    locale?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    timeFormat?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    twoFactorSecret?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    twoFactorEnabled?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    identityProvider?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    identityProviderId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    invitedTo?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    brandColor?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    darkBrandColor?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    away?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    allowDynamicBooking?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    metadata?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    verified?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    role?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    disableImpersonation?: keyof typeof SortOrder;

    @Field(() => UserCountOrderByAggregateInput, {nullable:true})
    _count?: UserCountOrderByAggregateInput;

    @Field(() => UserAvgOrderByAggregateInput, {nullable:true})
    _avg?: UserAvgOrderByAggregateInput;

    @Field(() => UserMaxOrderByAggregateInput, {nullable:true})
    _max?: UserMaxOrderByAggregateInput;

    @Field(() => UserMinOrderByAggregateInput, {nullable:true})
    _min?: UserMinOrderByAggregateInput;

    @Field(() => UserSumOrderByAggregateInput, {nullable:true})
    _sum?: UserSumOrderByAggregateInput;
}
