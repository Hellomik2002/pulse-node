import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventTypeCreateNestedManyWithoutTeamInput } from '../event-type/event-type-create-nested-many-without-team.input';
import { GraphQLJSON } from 'graphql-type-json';

@InputType()
export class TeamCreateWithoutMembersInput {

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

    @Field(() => EventTypeCreateNestedManyWithoutTeamInput, {nullable:true})
    eventTypes?: EventTypeCreateNestedManyWithoutTeamInput;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => GraphQLJSON, {nullable:true})
    metadata?: any;
}
