import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventTypeCreateWithoutTeamInput } from './event-type-create-without-team.input';
import { Type } from 'class-transformer';
import { EventTypeCreateOrConnectWithoutTeamInput } from './event-type-create-or-connect-without-team.input';
import { EventTypeCreateManyTeamInputEnvelope } from './event-type-create-many-team-input-envelope.input';
import { EventTypeWhereUniqueInput } from './event-type-where-unique.input';

@InputType()
export class EventTypeCreateNestedManyWithoutTeamInput {

    @Field(() => [EventTypeCreateWithoutTeamInput], {nullable:true})
    @Type(() => EventTypeCreateWithoutTeamInput)
    create?: Array<EventTypeCreateWithoutTeamInput>;

    @Field(() => [EventTypeCreateOrConnectWithoutTeamInput], {nullable:true})
    @Type(() => EventTypeCreateOrConnectWithoutTeamInput)
    connectOrCreate?: Array<EventTypeCreateOrConnectWithoutTeamInput>;

    @Field(() => EventTypeCreateManyTeamInputEnvelope, {nullable:true})
    @Type(() => EventTypeCreateManyTeamInputEnvelope)
    createMany?: EventTypeCreateManyTeamInputEnvelope;

    @Field(() => [EventTypeWhereUniqueInput], {nullable:true})
    @Type(() => EventTypeWhereUniqueInput)
    connect?: Array<EventTypeWhereUniqueInput>;
}
