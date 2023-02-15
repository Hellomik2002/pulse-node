import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BookingReferenceUpdateInput } from './booking-reference-update.input';
import { Type } from 'class-transformer';
import { BookingReferenceWhereUniqueInput } from './booking-reference-where-unique.input';

@ArgsType()
export class UpdateOneBookingReferenceArgs {

    @Field(() => BookingReferenceUpdateInput, {nullable:false})
    @Type(() => BookingReferenceUpdateInput)
    data!: BookingReferenceUpdateInput;

    @Field(() => BookingReferenceWhereUniqueInput, {nullable:false})
    @Type(() => BookingReferenceWhereUniqueInput)
    where!: BookingReferenceWhereUniqueInput;
}
