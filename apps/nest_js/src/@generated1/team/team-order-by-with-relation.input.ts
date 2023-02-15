import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { MembershipOrderByRelationAggregateInput } from '../membership/membership-order-by-relation-aggregate.input';
import { EventTypeOrderByRelationAggregateInput } from '../event-type/event-type-order-by-relation-aggregate.input';

@InputType()
export class TeamOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    slug?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    logo?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    bio?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    hideBranding?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    hideBookATeamMember?: keyof typeof SortOrder;

    @Field(() => MembershipOrderByRelationAggregateInput, {nullable:true})
    members?: MembershipOrderByRelationAggregateInput;

    @Field(() => EventTypeOrderByRelationAggregateInput, {nullable:true})
    eventTypes?: EventTypeOrderByRelationAggregateInput;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    metadata?: keyof typeof SortOrder;
}
