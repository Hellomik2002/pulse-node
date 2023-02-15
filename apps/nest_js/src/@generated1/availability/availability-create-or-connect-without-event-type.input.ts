import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AvailabilityWhereUniqueInput } from './availability-where-unique.input';
import { Type } from 'class-transformer';
import { AvailabilityCreateWithoutEventTypeInput } from './availability-create-without-event-type.input';

@InputType()
export class AvailabilityCreateOrConnectWithoutEventTypeInput {

    @Field(() => AvailabilityWhereUniqueInput, {nullable:false})
    @Type(() => AvailabilityWhereUniqueInput)
    where!: AvailabilityWhereUniqueInput;

    @Field(() => AvailabilityCreateWithoutEventTypeInput, {nullable:false})
    @Type(() => AvailabilityCreateWithoutEventTypeInput)
    create!: AvailabilityCreateWithoutEventTypeInput;
}
