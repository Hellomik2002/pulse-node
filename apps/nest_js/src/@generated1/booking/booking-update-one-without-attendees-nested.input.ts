import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BookingCreateWithoutAttendeesInput } from './booking-create-without-attendees.input';
import { Type } from 'class-transformer';
import { BookingCreateOrConnectWithoutAttendeesInput } from './booking-create-or-connect-without-attendees.input';
import { BookingUpsertWithoutAttendeesInput } from './booking-upsert-without-attendees.input';
import { BookingWhereUniqueInput } from './booking-where-unique.input';
import { BookingUpdateWithoutAttendeesInput } from './booking-update-without-attendees.input';

@InputType()
export class BookingUpdateOneWithoutAttendeesNestedInput {

    @Field(() => BookingCreateWithoutAttendeesInput, {nullable:true})
    @Type(() => BookingCreateWithoutAttendeesInput)
    create?: BookingCreateWithoutAttendeesInput;

    @Field(() => BookingCreateOrConnectWithoutAttendeesInput, {nullable:true})
    @Type(() => BookingCreateOrConnectWithoutAttendeesInput)
    connectOrCreate?: BookingCreateOrConnectWithoutAttendeesInput;

    @Field(() => BookingUpsertWithoutAttendeesInput, {nullable:true})
    @Type(() => BookingUpsertWithoutAttendeesInput)
    upsert?: BookingUpsertWithoutAttendeesInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => BookingWhereUniqueInput, {nullable:true})
    @Type(() => BookingWhereUniqueInput)
    connect?: BookingWhereUniqueInput;

    @Field(() => BookingUpdateWithoutAttendeesInput, {nullable:true})
    @Type(() => BookingUpdateWithoutAttendeesInput)
    update?: BookingUpdateWithoutAttendeesInput;
}
