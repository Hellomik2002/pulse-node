import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutSchedulesInput } from '../user/user-create-nested-one-without-schedules.input';
import { AvailabilityCreateNestedManyWithoutScheduleInput } from '../availability/availability-create-nested-many-without-schedule.input';

@InputType()
export class ScheduleCreateWithoutEventTypeInput {

    @Field(() => UserCreateNestedOneWithoutSchedulesInput, {nullable:false})
    user!: UserCreateNestedOneWithoutSchedulesInput;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:true})
    timeZone?: string;

    @Field(() => AvailabilityCreateNestedManyWithoutScheduleInput, {nullable:true})
    availability?: AvailabilityCreateNestedManyWithoutScheduleInput;
}
