import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MembershipCreateNestedManyWithoutTeamInput } from '../membership/membership-create-nested-many-without-team.input';
import { GraphQLJSON } from 'graphql-type-json';

@InputType()
export class TeamCreateWithoutEventTypesInput {

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

    @Field(() => MembershipCreateNestedManyWithoutTeamInput, {nullable:true})
    members?: MembershipCreateNestedManyWithoutTeamInput;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => GraphQLJSON, {nullable:true})
    metadata?: any;
}
