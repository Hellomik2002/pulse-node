import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AvailabilityWhereUniqueInput } from './availability-where-unique.input';
import { Type } from 'class-transformer';
import { AvailabilityUpdateWithoutEventTypeInput } from './availability-update-without-event-type.input';

@InputType()
export class AvailabilityUpdateWithWhereUniqueWithoutEventTypeInput {

    @Field(() => AvailabilityWhereUniqueInput, {nullable:false})
    @Type(() => AvailabilityWhereUniqueInput)
    where!: AvailabilityWhereUniqueInput;

    @Field(() => AvailabilityUpdateWithoutEventTypeInput, {nullable:false})
    @Type(() => AvailabilityUpdateWithoutEventTypeInput)
    data!: AvailabilityUpdateWithoutEventTypeInput;
}
