import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BookingStatus } from './booking-status.enum';

@InputType()
export class EnumBookingStatusFieldUpdateOperationsInput {

    @Field(() => BookingStatus, {nullable:true})
    set?: keyof typeof BookingStatus;
}
