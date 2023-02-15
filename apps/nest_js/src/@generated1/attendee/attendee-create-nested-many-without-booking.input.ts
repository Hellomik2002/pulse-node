import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AttendeeCreateWithoutBookingInput } from './attendee-create-without-booking.input';
import { Type } from 'class-transformer';
import { AttendeeCreateOrConnectWithoutBookingInput } from './attendee-create-or-connect-without-booking.input';
import { AttendeeCreateManyBookingInputEnvelope } from './attendee-create-many-booking-input-envelope.input';
import { AttendeeWhereUniqueInput } from './attendee-where-unique.input';

@InputType()
export class AttendeeCreateNestedManyWithoutBookingInput {

    @Field(() => [AttendeeCreateWithoutBookingInput], {nullable:true})
    @Type(() => AttendeeCreateWithoutBookingInput)
    create?: Array<AttendeeCreateWithoutBookingInput>;

    @Field(() => [AttendeeCreateOrConnectWithoutBookingInput], {nullable:true})
    @Type(() => AttendeeCreateOrConnectWithoutBookingInput)
    connectOrCreate?: Array<AttendeeCreateOrConnectWithoutBookingInput>;

    @Field(() => AttendeeCreateManyBookingInputEnvelope, {nullable:true})
    @Type(() => AttendeeCreateManyBookingInputEnvelope)
    createMany?: AttendeeCreateManyBookingInputEnvelope;

    @Field(() => [AttendeeWhereUniqueInput], {nullable:true})
    @Type(() => AttendeeWhereUniqueInput)
    connect?: Array<AttendeeWhereUniqueInput>;
}
