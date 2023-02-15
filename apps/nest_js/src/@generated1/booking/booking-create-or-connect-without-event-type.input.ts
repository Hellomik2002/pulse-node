import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BookingWhereUniqueInput } from './booking-where-unique.input';
import { Type } from 'class-transformer';
import { BookingCreateWithoutEventTypeInput } from './booking-create-without-event-type.input';

@InputType()
export class BookingCreateOrConnectWithoutEventTypeInput {

    @Field(() => BookingWhereUniqueInput, {nullable:false})
    @Type(() => BookingWhereUniqueInput)
    where!: BookingWhereUniqueInput;

    @Field(() => BookingCreateWithoutEventTypeInput, {nullable:false})
    @Type(() => BookingCreateWithoutEventTypeInput)
    create!: BookingCreateWithoutEventTypeInput;
}
