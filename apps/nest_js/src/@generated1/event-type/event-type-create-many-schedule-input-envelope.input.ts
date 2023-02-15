import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventTypeCreateManyScheduleInput } from './event-type-create-many-schedule.input';
import { Type } from 'class-transformer';

@InputType()
export class EventTypeCreateManyScheduleInputEnvelope {

    @Field(() => [EventTypeCreateManyScheduleInput], {nullable:false})
    @Type(() => EventTypeCreateManyScheduleInput)
    data!: Array<EventTypeCreateManyScheduleInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
