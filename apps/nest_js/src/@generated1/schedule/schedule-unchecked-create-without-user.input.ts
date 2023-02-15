import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { EventTypeUncheckedCreateNestedManyWithoutScheduleInput } from '../event-type/event-type-unchecked-create-nested-many-without-schedule.input';
import { AvailabilityUncheckedCreateNestedManyWithoutScheduleInput } from '../availability/availability-unchecked-create-nested-many-without-schedule.input';

@InputType()
export class ScheduleUncheckedCreateWithoutUserInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => EventTypeUncheckedCreateNestedManyWithoutScheduleInput, {nullable:true})
    eventType?: EventTypeUncheckedCreateNestedManyWithoutScheduleInput;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:true})
    timeZone?: string;

    @Field(() => AvailabilityUncheckedCreateNestedManyWithoutScheduleInput, {nullable:true})
    availability?: AvailabilityUncheckedCreateNestedManyWithoutScheduleInput;
}
