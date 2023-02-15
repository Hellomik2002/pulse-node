import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutAvailabilityInput } from '../user/user-create-nested-one-without-availability.input';
import { EventTypeCreateNestedOneWithoutAvailabilityInput } from '../event-type/event-type-create-nested-one-without-availability.input';
import { AvailabilityCreatedaysInput } from './availability-createdays.input';

@InputType()
export class AvailabilityCreateWithoutScheduleInput {

    @Field(() => UserCreateNestedOneWithoutAvailabilityInput, {nullable:true})
    user?: UserCreateNestedOneWithoutAvailabilityInput;

    @Field(() => EventTypeCreateNestedOneWithoutAvailabilityInput, {nullable:true})
    eventType?: EventTypeCreateNestedOneWithoutAvailabilityInput;

    @Field(() => AvailabilityCreatedaysInput, {nullable:true})
    days?: AvailabilityCreatedaysInput;

    @Field(() => Date, {nullable:false})
    startTime!: Date | string;

    @Field(() => Date, {nullable:false})
    endTime!: Date | string;

    @Field(() => Date, {nullable:true})
    date?: Date | string;
}
