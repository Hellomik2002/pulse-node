import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventTypeCreateWithoutTeamInput } from './event-type-create-without-team.input';
import { Type } from 'class-transformer';
import { EventTypeCreateOrConnectWithoutTeamInput } from './event-type-create-or-connect-without-team.input';
import { EventTypeUpsertWithWhereUniqueWithoutTeamInput } from './event-type-upsert-with-where-unique-without-team.input';
import { EventTypeCreateManyTeamInputEnvelope } from './event-type-create-many-team-input-envelope.input';
import { EventTypeWhereUniqueInput } from './event-type-where-unique.input';
import { EventTypeUpdateWithWhereUniqueWithoutTeamInput } from './event-type-update-with-where-unique-without-team.input';
import { EventTypeUpdateManyWithWhereWithoutTeamInput } from './event-type-update-many-with-where-without-team.input';
import { EventTypeScalarWhereInput } from './event-type-scalar-where.input';

@InputType()
export class EventTypeUpdateManyWithoutTeamNestedInput {

    @Field(() => [EventTypeCreateWithoutTeamInput], {nullable:true})
    @Type(() => EventTypeCreateWithoutTeamInput)
    create?: Array<EventTypeCreateWithoutTeamInput>;

    @Field(() => [EventTypeCreateOrConnectWithoutTeamInput], {nullable:true})
    @Type(() => EventTypeCreateOrConnectWithoutTeamInput)
    connectOrCreate?: Array<EventTypeCreateOrConnectWithoutTeamInput>;

    @Field(() => [EventTypeUpsertWithWhereUniqueWithoutTeamInput], {nullable:true})
    @Type(() => EventTypeUpsertWithWhereUniqueWithoutTeamInput)
    upsert?: Array<EventTypeUpsertWithWhereUniqueWithoutTeamInput>;

    @Field(() => EventTypeCreateManyTeamInputEnvelope, {nullable:true})
    @Type(() => EventTypeCreateManyTeamInputEnvelope)
    createMany?: EventTypeCreateManyTeamInputEnvelope;

    @Field(() => [EventTypeWhereUniqueInput], {nullable:true})
    @Type(() => EventTypeWhereUniqueInput)
    set?: Array<EventTypeWhereUniqueInput>;

    @Field(() => [EventTypeWhereUniqueInput], {nullable:true})
    @Type(() => EventTypeWhereUniqueInput)
    disconnect?: Array<EventTypeWhereUniqueInput>;

    @Field(() => [EventTypeWhereUniqueInput], {nullable:true})
    @Type(() => EventTypeWhereUniqueInput)
    delete?: Array<EventTypeWhereUniqueInput>;

    @Field(() => [EventTypeWhereUniqueInput], {nullable:true})
    @Type(() => EventTypeWhereUniqueInput)
    connect?: Array<EventTypeWhereUniqueInput>;

    @Field(() => [EventTypeUpdateWithWhereUniqueWithoutTeamInput], {nullable:true})
    @Type(() => EventTypeUpdateWithWhereUniqueWithoutTeamInput)
    update?: Array<EventTypeUpdateWithWhereUniqueWithoutTeamInput>;

    @Field(() => [EventTypeUpdateManyWithWhereWithoutTeamInput], {nullable:true})
    @Type(() => EventTypeUpdateManyWithWhereWithoutTeamInput)
    updateMany?: Array<EventTypeUpdateManyWithWhereWithoutTeamInput>;

    @Field(() => [EventTypeScalarWhereInput], {nullable:true})
    @Type(() => EventTypeScalarWhereInput)
    deleteMany?: Array<EventTypeScalarWhereInput>;
}
