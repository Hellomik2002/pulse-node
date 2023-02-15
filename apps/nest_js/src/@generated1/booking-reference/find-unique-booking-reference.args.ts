import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BookingReferenceWhereUniqueInput } from './booking-reference-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueBookingReferenceArgs {

    @Field(() => BookingReferenceWhereUniqueInput, {nullable:false})
    @Type(() => BookingReferenceWhereUniqueInput)
    where!: BookingReferenceWhereUniqueInput;
}
