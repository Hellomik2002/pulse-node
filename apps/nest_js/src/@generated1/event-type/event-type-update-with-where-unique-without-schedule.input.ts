import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventTypeWhereUniqueInput } from './event-type-where-unique.input';
import { Type } from 'class-transformer';
import { EventTypeUpdateWithoutScheduleInput } from './event-type-update-without-schedule.input';

@InputType()
export class EventTypeUpdateWithWhereUniqueWithoutScheduleInput {

    @Field(() => EventTypeWhereUniqueInput, {nullable:false})
    @Type(() => EventTypeWhereUniqueInput)
    where!: EventTypeWhereUniqueInput;

    @Field(() => EventTypeUpdateWithoutScheduleInput, {nullable:false})
    @Type(() => EventTypeUpdateWithoutScheduleInput)
    data!: EventTypeUpdateWithoutScheduleInput;
}
