import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventTypeWhereUniqueInput } from './event-type-where-unique.input';
import { Type } from 'class-transformer';
import { EventTypeUpdateWithoutTeamInput } from './event-type-update-without-team.input';

@InputType()
export class EventTypeUpdateWithWhereUniqueWithoutTeamInput {

    @Field(() => EventTypeWhereUniqueInput, {nullable:false})
    @Type(() => EventTypeWhereUniqueInput)
    where!: EventTypeWhereUniqueInput;

    @Field(() => EventTypeUpdateWithoutTeamInput, {nullable:false})
    @Type(() => EventTypeUpdateWithoutTeamInput)
    data!: EventTypeUpdateWithoutTeamInput;
}
