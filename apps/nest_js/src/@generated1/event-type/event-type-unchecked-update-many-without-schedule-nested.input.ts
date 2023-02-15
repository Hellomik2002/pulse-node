import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventTypeCreateWithoutScheduleInput } from './event-type-create-without-schedule.input';
import { Type } from 'class-transformer';
import { EventTypeCreateOrConnectWithoutScheduleInput } from './event-type-create-or-connect-without-schedule.input';
import { EventTypeUpsertWithWhereUniqueWithoutScheduleInput } from './event-type-upsert-with-where-unique-without-schedule.input';
import { EventTypeCreateManyScheduleInputEnvelope } from './event-type-create-many-schedule-input-envelope.input';
import { EventTypeWhereUniqueInput } from './event-type-where-unique.input';
import { EventTypeUpdateWithWhereUniqueWithoutScheduleInput } from './event-type-update-with-where-unique-without-schedule.input';
import { EventTypeUpdateManyWithWhereWithoutScheduleInput } from './event-type-update-many-with-where-without-schedule.input';
import { EventTypeScalarWhereInput } from './event-type-scalar-where.input';

@InputType()
export class EventTypeUncheckedUpdateManyWithoutScheduleNestedInput {

    @Field(() => [EventTypeCreateWithoutScheduleInput], {nullable:true})
    @Type(() => EventTypeCreateWithoutScheduleInput)
    create?: Array<EventTypeCreateWithoutScheduleInput>;

    @Field(() => [EventTypeCreateOrConnectWithoutScheduleInput], {nullable:true})
    @Type(() => EventTypeCreateOrConnectWithoutScheduleInput)
    connectOrCreate?: Array<EventTypeCreateOrConnectWithoutScheduleInput>;

    @Field(() => [EventTypeUpsertWithWhereUniqueWithoutScheduleInput], {nullable:true})
    @Type(() => EventTypeUpsertWithWhereUniqueWithoutScheduleInput)
    upsert?: Array<EventTypeUpsertWithWhereUniqueWithoutScheduleInput>;

    @Field(() => EventTypeCreateManyScheduleInputEnvelope, {nullable:true})
    @Type(() => EventTypeCreateManyScheduleInputEnvelope)
    createMany?: EventTypeCreateManyScheduleInputEnvelope;

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

    @Field(() => [EventTypeUpdateWithWhereUniqueWithoutScheduleInput], {nullable:true})
    @Type(() => EventTypeUpdateWithWhereUniqueWithoutScheduleInput)
    update?: Array<EventTypeUpdateWithWhereUniqueWithoutScheduleInput>;

    @Field(() => [EventTypeUpdateManyWithWhereWithoutScheduleInput], {nullable:true})
    @Type(() => EventTypeUpdateManyWithWhereWithoutScheduleInput)
    updateMany?: Array<EventTypeUpdateManyWithWhereWithoutScheduleInput>;

    @Field(() => [EventTypeScalarWhereInput], {nullable:true})
    @Type(() => EventTypeScalarWhereInput)
    deleteMany?: Array<EventTypeScalarWhereInput>;
}
