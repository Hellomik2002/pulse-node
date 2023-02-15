import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BookingWhereUniqueInput } from './booking-where-unique.input';
import { Type } from 'class-transformer';
import { BookingUpdateWithoutUserInput } from './booking-update-without-user.input';
import { BookingCreateWithoutUserInput } from './booking-create-without-user.input';

@InputType()
export class BookingUpsertWithWhereUniqueWithoutUserInput {

    @Field(() => BookingWhereUniqueInput, {nullable:false})
    @Type(() => BookingWhereUniqueInput)
    where!: BookingWhereUniqueInput;

    @Field(() => BookingUpdateWithoutUserInput, {nullable:false})
    @Type(() => BookingUpdateWithoutUserInput)
    update!: BookingUpdateWithoutUserInput;

    @Field(() => BookingCreateWithoutUserInput, {nullable:false})
    @Type(() => BookingCreateWithoutUserInput)
    create!: BookingCreateWithoutUserInput;
}
