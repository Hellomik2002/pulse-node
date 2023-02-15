import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { EventTypeUserIdSlugCompoundUniqueInput } from './event-type-user-id-slug-compound-unique.input';
import { EventTypeTeamIdSlugCompoundUniqueInput } from './event-type-team-id-slug-compound-unique.input';

@InputType()
export class EventTypeWhereUniqueInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => EventTypeUserIdSlugCompoundUniqueInput, {nullable:true})
    userId_slug?: EventTypeUserIdSlugCompoundUniqueInput;

    @Field(() => EventTypeTeamIdSlugCompoundUniqueInput, {nullable:true})
    teamId_slug?: EventTypeTeamIdSlugCompoundUniqueInput;
}
