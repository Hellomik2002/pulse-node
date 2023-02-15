import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { MembershipUncheckedCreateNestedManyWithoutTeamInput } from '../membership/membership-unchecked-create-nested-many-without-team.input';
import { EventTypeUncheckedCreateNestedManyWithoutTeamInput } from '../event-type/event-type-unchecked-create-nested-many-without-team.input';
import { GraphQLJSON } from 'graphql-type-json';

@InputType()
export class TeamUncheckedCreateInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:true})
    slug?: string;

    @Field(() => String, {nullable:true})
    logo?: string;

    @Field(() => String, {nullable:true})
    bio?: string;

    @Field(() => Boolean, {nullable:true})
    hideBranding?: boolean;

    @Field(() => Boolean, {nullable:true})
    hideBookATeamMember?: boolean;

    @Field(() => MembershipUncheckedCreateNestedManyWithoutTeamInput, {nullable:true})
    members?: MembershipUncheckedCreateNestedManyWithoutTeamInput;

    @Field(() => EventTypeUncheckedCreateNestedManyWithoutTeamInput, {nullable:true})
    eventTypes?: EventTypeUncheckedCreateNestedManyWithoutTeamInput;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => GraphQLJSON, {nullable:true})
    metadata?: any;
}
