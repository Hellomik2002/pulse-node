import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BookingUpdateInput } from './booking-update.input';
import { Type } from 'class-transformer';
import { BookingWhereUniqueInput } from './booking-where-unique.input';

@ArgsType()
export class UpdateOneBookingArgs {

    @Field(() => BookingUpdateInput, {nullable:false})
    @Type(() => BookingUpdateInput)
    data!: BookingUpdateInput;

    @Field(() => BookingWhereUniqueInput, {nullable:false})
    @Type(() => BookingWhereUniqueInput)
    where!: BookingWhereUniqueInput;
}
