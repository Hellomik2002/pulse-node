import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventTypeWhereUniqueInput } from './event-type-where-unique.input';
import { Type } from 'class-transformer';
import { EventTypeCreateWithoutTeamInput } from './event-type-create-without-team.input';

@InputType()
export class EventTypeCreateOrConnectWithoutTeamInput {

    @Field(() => EventTypeWhereUniqueInput, {nullable:false})
    @Type(() => EventTypeWhereUniqueInput)
    where!: EventTypeWhereUniqueInput;

    @Field(() => EventTypeCreateWithoutTeamInput, {nullable:false})
    @Type(() => EventTypeCreateWithoutTeamInput)
    create!: EventTypeCreateWithoutTeamInput;
}
