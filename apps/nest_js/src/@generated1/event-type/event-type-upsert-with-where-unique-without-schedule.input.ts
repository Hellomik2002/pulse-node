import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventTypeWhereUniqueInput } from './event-type-where-unique.input';
import { Type } from 'class-transformer';
import { EventTypeUpdateWithoutScheduleInput } from './event-type-update-without-schedule.input';
import { EventTypeCreateWithoutScheduleInput } from './event-type-create-without-schedule.input';

@InputType()
export class EventTypeUpsertWithWhereUniqueWithoutScheduleInput {

    @Field(() => EventTypeWhereUniqueInput, {nullable:false})
    @Type(() => EventTypeWhereUniqueInput)
    where!: EventTypeWhereUniqueInput;

    @Field(() => EventTypeUpdateWithoutScheduleInput, {nullable:false})
    @Type(() => EventTypeUpdateWithoutScheduleInput)
    update!: EventTypeUpdateWithoutScheduleInput;

    @Field(() => EventTypeCreateWithoutScheduleInput, {nullable:false})
    @Type(() => EventTypeCreateWithoutScheduleInput)
    create!: EventTypeCreateWithoutScheduleInput;
}
