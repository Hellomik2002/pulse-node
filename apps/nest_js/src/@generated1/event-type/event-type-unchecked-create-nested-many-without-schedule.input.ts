import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventTypeCreateWithoutScheduleInput } from './event-type-create-without-schedule.input';
import { Type } from 'class-transformer';
import { EventTypeCreateOrConnectWithoutScheduleInput } from './event-type-create-or-connect-without-schedule.input';
import { EventTypeCreateManyScheduleInputEnvelope } from './event-type-create-many-schedule-input-envelope.input';
import { EventTypeWhereUniqueInput } from './event-type-where-unique.input';

@InputType()
export class EventTypeUncheckedCreateNestedManyWithoutScheduleInput {

    @Field(() => [EventTypeCreateWithoutScheduleInput], {nullable:true})
    @Type(() => EventTypeCreateWithoutScheduleInput)
    create?: Array<EventTypeCreateWithoutScheduleInput>;

    @Field(() => [EventTypeCreateOrConnectWithoutScheduleInput], {nullable:true})
    @Type(() => EventTypeCreateOrConnectWithoutScheduleInput)
    connectOrCreate?: Array<EventTypeCreateOrConnectWithoutScheduleInput>;

    @Field(() => EventTypeCreateManyScheduleInputEnvelope, {nullable:true})
    @Type(() => EventTypeCreateManyScheduleInputEnvelope)
    createMany?: EventTypeCreateManyScheduleInputEnvelope;

    @Field(() => [EventTypeWhereUniqueInput], {nullable:true})
    @Type(() => EventTypeWhereUniqueInput)
    connect?: Array<EventTypeWhereUniqueInput>;
}
