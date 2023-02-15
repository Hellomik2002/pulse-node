import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BookingReferenceWhereInput } from './booking-reference-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyBookingReferenceArgs {

    @Field(() => BookingReferenceWhereInput, {nullable:true})
    @Type(() => BookingReferenceWhereInput)
    where?: BookingReferenceWhereInput;
}
