import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventTypeCustomInputCreateWithoutEventTypeInput } from './event-type-custom-input-create-without-event-type.input';
import { Type } from 'class-transformer';
import { EventTypeCustomInputCreateOrConnectWithoutEventTypeInput } from './event-type-custom-input-create-or-connect-without-event-type.input';
import { EventTypeCustomInputUpsertWithWhereUniqueWithoutEventTypeInput } from './event-type-custom-input-upsert-with-where-unique-without-event-type.input';
import { EventTypeCustomInputCreateManyEventTypeInputEnvelope } from './event-type-custom-input-create-many-event-type-input-envelope.input';
import { EventTypeCustomInputWhereUniqueInput } from './event-type-custom-input-where-unique.input';
import { EventTypeCustomInputUpdateWithWhereUniqueWithoutEventTypeInput } from './event-type-custom-input-update-with-where-unique-without-event-type.input';
import { EventTypeCustomInputUpdateManyWithWhereWithoutEventTypeInput } from './event-type-custom-input-update-many-with-where-without-event-type.input';
import { EventTypeCustomInputScalarWhereInput } from './event-type-custom-input-scalar-where.input';

@InputType()
export class EventTypeCustomInputUncheckedUpdateManyWithoutEventTypeNestedInput {

    @Field(() => [EventTypeCustomInputCreateWithoutEventTypeInput], {nullable:true})
    @Type(() => EventTypeCustomInputCreateWithoutEventTypeInput)
    create?: Array<EventTypeCustomInputCreateWithoutEventTypeInput>;

    @Field(() => [EventTypeCustomInputCreateOrConnectWithoutEventTypeInput], {nullable:true})
    @Type(() => EventTypeCustomInputCreateOrConnectWithoutEventTypeInput)
    connectOrCreate?: Array<EventTypeCustomInputCreateOrConnectWithoutEventTypeInput>;

    @Field(() => [EventTypeCustomInputUpsertWithWhereUniqueWithoutEventTypeInput], {nullable:true})
    @Type(() => EventTypeCustomInputUpsertWithWhereUniqueWithoutEventTypeInput)
    upsert?: Array<EventTypeCustomInputUpsertWithWhereUniqueWithoutEventTypeInput>;

    @Field(() => EventTypeCustomInputCreateManyEventTypeInputEnvelope, {nullable:true})
    @Type(() => EventTypeCustomInputCreateManyEventTypeInputEnvelope)
    createMany?: EventTypeCustomInputCreateManyEventTypeInputEnvelope;

    @Field(() => [EventTypeCustomInputWhereUniqueInput], {nullable:true})
    @Type(() => EventTypeCustomInputWhereUniqueInput)
    set?: Array<EventTypeCustomInputWhereUniqueInput>;

    @Field(() => [EventTypeCustomInputWhereUniqueInput], {nullable:true})
    @Type(() => EventTypeCustomInputWhereUniqueInput)
    disconnect?: Array<EventTypeCustomInputWhereUniqueInput>;

    @Field(() => [EventTypeCustomInputWhereUniqueInput], {nullable:true})
    @Type(() => EventTypeCustomInputWhereUniqueInput)
    delete?: Array<EventTypeCustomInputWhereUniqueInput>;

    @Field(() => [EventTypeCustomInputWhereUniqueInput], {nullable:true})
    @Type(() => EventTypeCustomInputWhereUniqueInput)
    connect?: Array<EventTypeCustomInputWhereUniqueInput>;

    @Field(() => [EventTypeCustomInputUpdateWithWhereUniqueWithoutEventTypeInput], {nullable:true})
    @Type(() => EventTypeCustomInputUpdateWithWhereUniqueWithoutEventTypeInput)
    update?: Array<EventTypeCustomInputUpdateWithWhereUniqueWithoutEventTypeInput>;

    @Field(() => [EventTypeCustomInputUpdateManyWithWhereWithoutEventTypeInput], {nullable:true})
    @Type(() => EventTypeCustomInputUpdateManyWithWhereWithoutEventTypeInput)
    updateMany?: Array<EventTypeCustomInputUpdateManyWithWhereWithoutEventTypeInput>;

    @Field(() => [EventTypeCustomInputScalarWhereInput], {nullable:true})
    @Type(() => EventTypeCustomInputScalarWhereInput)
    deleteMany?: Array<EventTypeCustomInputScalarWhereInput>;
}
