import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventTypeWhereUniqueInput } from './event-type-where-unique.input';
import { Type } from 'class-transformer';
import { EventTypeCreateWithoutScheduleInput } from './event-type-create-without-schedule.input';

@InputType()
export class EventTypeCreateOrConnectWithoutScheduleInput {

    @Field(() => EventTypeWhereUniqueInput, {nullable:false})
    @Type(() => EventTypeWhereUniqueInput)
    where!: EventTypeWhereUniqueInput;

    @Field(() => EventTypeCreateWithoutScheduleInput, {nullable:false})
    @Type(() => EventTypeCreateWithoutScheduleInput)
    create!: EventTypeCreateWithoutScheduleInput;
}
