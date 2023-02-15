import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AttendeeCreateWithoutBookingInput } from './attendee-create-without-booking.input';
import { Type } from 'class-transformer';
import { AttendeeCreateOrConnectWithoutBookingInput } from './attendee-create-or-connect-without-booking.input';
import { AttendeeUpsertWithWhereUniqueWithoutBookingInput } from './attendee-upsert-with-where-unique-without-booking.input';
import { AttendeeCreateManyBookingInputEnvelope } from './attendee-create-many-booking-input-envelope.input';
import { AttendeeWhereUniqueInput } from './attendee-where-unique.input';
import { AttendeeUpdateWithWhereUniqueWithoutBookingInput } from './attendee-update-with-where-unique-without-booking.input';
import { AttendeeUpdateManyWithWhereWithoutBookingInput } from './attendee-update-many-with-where-without-booking.input';
import { AttendeeScalarWhereInput } from './attendee-scalar-where.input';

@InputType()
export class AttendeeUncheckedUpdateManyWithoutBookingNestedInput {

    @Field(() => [AttendeeCreateWithoutBookingInput], {nullable:true})
    @Type(() => AttendeeCreateWithoutBookingInput)
    create?: Array<AttendeeCreateWithoutBookingInput>;

    @Field(() => [AttendeeCreateOrConnectWithoutBookingInput], {nullable:true})
    @Type(() => AttendeeCreateOrConnectWithoutBookingInput)
    connectOrCreate?: Array<AttendeeCreateOrConnectWithoutBookingInput>;

    @Field(() => [AttendeeUpsertWithWhereUniqueWithoutBookingInput], {nullable:true})
    @Type(() => AttendeeUpsertWithWhereUniqueWithoutBookingInput)
    upsert?: Array<AttendeeUpsertWithWhereUniqueWithoutBookingInput>;

    @Field(() => AttendeeCreateManyBookingInputEnvelope, {nullable:true})
    @Type(() => AttendeeCreateManyBookingInputEnvelope)
    createMany?: AttendeeCreateManyBookingInputEnvelope;

    @Field(() => [AttendeeWhereUniqueInput], {nullable:true})
    @Type(() => AttendeeWhereUniqueInput)
    set?: Array<AttendeeWhereUniqueInput>;

    @Field(() => [AttendeeWhereUniqueInput], {nullable:true})
    @Type(() => AttendeeWhereUniqueInput)
    disconnect?: Array<AttendeeWhereUniqueInput>;

    @Field(() => [AttendeeWhereUniqueInput], {nullable:true})
    @Type(() => AttendeeWhereUniqueInput)
    delete?: Array<AttendeeWhereUniqueInput>;

    @Field(() => [AttendeeWhereUniqueInput], {nullable:true})
    @Type(() => AttendeeWhereUniqueInput)
    connect?: Array<AttendeeWhereUniqueInput>;

    @Field(() => [AttendeeUpdateWithWhereUniqueWithoutBookingInput], {nullable:true})
    @Type(() => AttendeeUpdateWithWhereUniqueWithoutBookingInput)
    update?: Array<AttendeeUpdateWithWhereUniqueWithoutBookingInput>;

    @Field(() => [AttendeeUpdateManyWithWhereWithoutBookingInput], {nullable:true})
    @Type(() => AttendeeUpdateManyWithWhereWithoutBookingInput)
    updateMany?: Array<AttendeeUpdateManyWithWhereWithoutBookingInput>;

    @Field(() => [AttendeeScalarWhereInput], {nullable:true})
    @Type(() => AttendeeScalarWhereInput)
    deleteMany?: Array<AttendeeScalarWhereInput>;
}
