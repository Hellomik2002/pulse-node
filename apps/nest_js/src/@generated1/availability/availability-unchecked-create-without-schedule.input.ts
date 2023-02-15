import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { AvailabilityCreatedaysInput } from './availability-createdays.input';

@InputType()
export class AvailabilityUncheckedCreateWithoutScheduleInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Int, {nullable:true})
    userId?: number;

    @Field(() => Int, {nullable:true})
    eventTypeId?: number;

    @Field(() => AvailabilityCreatedaysInput, {nullable:true})
    days?: AvailabilityCreatedaysInput;

    @Field(() => Date, {nullable:false})
    startTime!: Date | string;

    @Field(() => Date, {nullable:false})
    endTime!: Date | string;

    @Field(() => Date, {nullable:true})
    date?: Date | string;
}
