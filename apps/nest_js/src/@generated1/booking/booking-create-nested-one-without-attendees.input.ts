import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BookingCreateWithoutAttendeesInput } from './booking-create-without-attendees.input';
import { Type } from 'class-transformer';
import { BookingCreateOrConnectWithoutAttendeesInput } from './booking-create-or-connect-without-attendees.input';
import { BookingWhereUniqueInput } from './booking-where-unique.input';

@InputType()
export class BookingCreateNestedOneWithoutAttendeesInput {

    @Field(() => BookingCreateWithoutAttendeesInput, {nullable:true})
    @Type(() => BookingCreateWithoutAttendeesInput)
    create?: BookingCreateWithoutAttendeesInput;

    @Field(() => BookingCreateOrConnectWithoutAttendeesInput, {nullable:true})
    @Type(() => BookingCreateOrConnectWithoutAttendeesInput)
    connectOrCreate?: BookingCreateOrConnectWithoutAttendeesInput;

    @Field(() => BookingWhereUniqueInput, {nullable:true})
    @Type(() => BookingWhereUniqueInput)
    connect?: BookingWhereUniqueInput;
}
