import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ScheduleUpdateWithoutEventTypeInput } from './schedule-update-without-event-type.input';
import { Type } from 'class-transformer';
import { ScheduleCreateWithoutEventTypeInput } from './schedule-create-without-event-type.input';

@InputType()
export class ScheduleUpsertWithoutEventTypeInput {

    @Field(() => ScheduleUpdateWithoutEventTypeInput, {nullable:false})
    @Type(() => ScheduleUpdateWithoutEventTypeInput)
    update!: ScheduleUpdateWithoutEventTypeInput;

    @Field(() => ScheduleCreateWithoutEventTypeInput, {nullable:false})
    @Type(() => ScheduleCreateWithoutEventTypeInput)
    create!: ScheduleCreateWithoutEventTypeInput;
}
