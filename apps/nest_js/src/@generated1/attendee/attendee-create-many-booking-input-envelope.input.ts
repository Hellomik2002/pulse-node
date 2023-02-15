import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AttendeeCreateManyBookingInput } from './attendee-create-many-booking.input';
import { Type } from 'class-transformer';

@InputType()
export class AttendeeCreateManyBookingInputEnvelope {

    @Field(() => [AttendeeCreateManyBookingInput], {nullable:false})
    @Type(() => AttendeeCreateManyBookingInput)
    data!: Array<AttendeeCreateManyBookingInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
