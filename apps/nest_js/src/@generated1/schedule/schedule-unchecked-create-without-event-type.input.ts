import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { AvailabilityUncheckedCreateNestedManyWithoutScheduleInput } from '../availability/availability-unchecked-create-nested-many-without-schedule.input';

@InputType()
export class ScheduleUncheckedCreateWithoutEventTypeInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Int, {nullable:false})
    userId!: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:true})
    timeZone?: string;

    @Field(() => AvailabilityUncheckedCreateNestedManyWithoutScheduleInput, {nullable:true})
    availability?: AvailabilityUncheckedCreateNestedManyWithoutScheduleInput;
}
