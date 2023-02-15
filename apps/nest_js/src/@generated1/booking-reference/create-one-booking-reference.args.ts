import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BookingReferenceCreateInput } from './booking-reference-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneBookingReferenceArgs {

    @Field(() => BookingReferenceCreateInput, {nullable:false})
    @Type(() => BookingReferenceCreateInput)
    data!: BookingReferenceCreateInput;
}
