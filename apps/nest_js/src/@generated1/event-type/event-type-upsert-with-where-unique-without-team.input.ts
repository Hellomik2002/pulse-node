import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventTypeWhereUniqueInput } from './event-type-where-unique.input';
import { Type } from 'class-transformer';
import { EventTypeUpdateWithoutTeamInput } from './event-type-update-without-team.input';
import { EventTypeCreateWithoutTeamInput } from './event-type-create-without-team.input';

@InputType()
export class EventTypeUpsertWithWhereUniqueWithoutTeamInput {

    @Field(() => EventTypeWhereUniqueInput, {nullable:false})
    @Type(() => EventTypeWhereUniqueInput)
    where!: EventTypeWhereUniqueInput;

    @Field(() => EventTypeUpdateWithoutTeamInput, {nullable:false})
    @Type(() => EventTypeUpdateWithoutTeamInput)
    update!: EventTypeUpdateWithoutTeamInput;

    @Field(() => EventTypeCreateWithoutTeamInput, {nullable:false})
    @Type(() => EventTypeCreateWithoutTeamInput)
    create!: EventTypeCreateWithoutTeamInput;
}
