import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BookingWhereUniqueInput } from './booking-where-unique.input';
import { Type } from 'class-transformer';
import { BookingCreateInput } from './booking-create.input';
import { BookingUpdateInput } from './booking-update.input';

@ArgsType()
export class UpsertOneBookingArgs {

    @Field(() => BookingWhereUniqueInput, {nullable:false})
    @Type(() => BookingWhereUniqueInput)
    where!: BookingWhereUniqueInput;

    @Field(() => BookingCreateInput, {nullable:false})
    @Type(() => BookingCreateInput)
    create!: BookingCreateInput;

    @Field(() => BookingUpdateInput, {nullable:false})
    @Type(() => BookingUpdateInput)
    update!: BookingUpdateInput;
}
