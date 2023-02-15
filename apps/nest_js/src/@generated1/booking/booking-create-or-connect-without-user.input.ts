import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BookingWhereUniqueInput } from './booking-where-unique.input';
import { Type } from 'class-transformer';
import { BookingCreateWithoutUserInput } from './booking-create-without-user.input';

@InputType()
export class BookingCreateOrConnectWithoutUserInput {

    @Field(() => BookingWhereUniqueInput, {nullable:false})
    @Type(() => BookingWhereUniqueInput)
    where!: BookingWhereUniqueInput;

    @Field(() => BookingCreateWithoutUserInput, {nullable:false})
    @Type(() => BookingCreateWithoutUserInput)
    create!: BookingCreateWithoutUserInput;
}
