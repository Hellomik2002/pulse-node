import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventTypeCreateNestedManyWithoutScheduleInput } from '../event-type/event-type-create-nested-many-without-schedule.input';
import { AvailabilityCreateNestedManyWithoutScheduleInput } from '../availability/availability-create-nested-many-without-schedule.input';

@InputType()
export class ScheduleCreateWithoutUserInput {

    @Field(() => EventTypeCreateNestedManyWithoutScheduleInput, {nullable:true})
    eventType?: EventTypeCreateNestedManyWithoutScheduleInput;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:true})
    timeZone?: string;

    @Field(() => AvailabilityCreateNestedManyWithoutScheduleInput, {nullable:true})
    availability?: AvailabilityCreateNestedManyWithoutScheduleInput;
}
