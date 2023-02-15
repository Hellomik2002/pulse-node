import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Membership } from '../membership/membership.model';
import { EventType } from '../event-type/event-type.model';
import { GraphQLJSON } from 'graphql-type-json';
import { TeamCount } from './team-count.output';

@ObjectType()
export class Team {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:true})
    slug!: string | null;

    @Field(() => String, {nullable:true})
    logo!: string | null;

    @Field(() => String, {nullable:true})
    bio!: string | null;

    @Field(() => Boolean, {nullable:false,defaultValue:false})
    hideBranding!: boolean;

    @Field(() => Boolean, {nullable:false,defaultValue:false})
    hideBookATeamMember!: boolean;

    @Field(() => [Membership], {nullable:true})
    members?: Array<Membership>;

    @Field(() => [EventType], {nullable:true})
    eventTypes?: Array<EventType>;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => GraphQLJSON, {nullable:true})
    metadata!: any | null;

    @Field(() => TeamCount, {nullable:false})
    _count?: TeamCount;
}
