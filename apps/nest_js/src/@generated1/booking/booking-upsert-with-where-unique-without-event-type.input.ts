import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BookingWhereUniqueInput } from './booking-where-unique.input';
import { Type } from 'class-transformer';
import { BookingUpdateWithoutEventTypeInput } from './booking-update-without-event-type.input';
import { BookingCreateWithoutEventTypeInput } from './booking-create-without-event-type.input';

@InputType()
export class BookingUpsertWithWhereUniqueWithoutEventTypeInput {

    @Field(() => BookingWhereUniqueInput, {nullable:false})
    @Type(() => BookingWhereUniqueInput)
    where!: BookingWhereUniqueInput;

    @Field(() => BookingUpdateWithoutEventTypeInput, {nullable:false})
    @Type(() => BookingUpdateWithoutEventTypeInput)
    update!: BookingUpdateWithoutEventTypeInput;

    @Field(() => BookingCreateWithoutEventTypeInput, {nullable:false})
    @Type(() => BookingCreateWithoutEventTypeInput)
    create!: BookingCreateWithoutEventTypeInput;
}
