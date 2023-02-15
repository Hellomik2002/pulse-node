import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BookingCreateInput } from './booking-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneBookingArgs {

    @Field(() => BookingCreateInput, {nullable:false})
    @Type(() => BookingCreateInput)
    data!: BookingCreateInput;
}
