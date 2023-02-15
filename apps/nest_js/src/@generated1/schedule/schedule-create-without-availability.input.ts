import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutSchedulesInput } from '../user/user-create-nested-one-without-schedules.input';
import { EventTypeCreateNestedManyWithoutScheduleInput } from '../event-type/event-type-create-nested-many-without-schedule.input';

@InputType()
export class ScheduleCreateWithoutAvailabilityInput {

    @Field(() => UserCreateNestedOneWithoutSchedulesInput, {nullable:false})
    user!: UserCreateNestedOneWithoutSchedulesInput;

    @Field(() => EventTypeCreateNestedManyWithoutScheduleInput, {nullable:true})
    eventType?: EventTypeCreateNestedManyWithoutScheduleInput;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:true})
    timeZone?: string;
}
