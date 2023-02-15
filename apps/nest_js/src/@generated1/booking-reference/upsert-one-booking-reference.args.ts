import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BookingReferenceWhereUniqueInput } from './booking-reference-where-unique.input';
import { Type } from 'class-transformer';
import { BookingReferenceCreateInput } from './booking-reference-create.input';
import { BookingReferenceUpdateInput } from './booking-reference-update.input';

@ArgsType()
export class UpsertOneBookingReferenceArgs {

    @Field(() => BookingReferenceWhereUniqueInput, {nullable:false})
    @Type(() => BookingReferenceWhereUniqueInput)
    where!: BookingReferenceWhereUniqueInput;

    @Field(() => BookingReferenceCreateInput, {nullable:false})
    @Type(() => BookingReferenceCreateInput)
    create!: BookingReferenceCreateInput;

    @Field(() => BookingReferenceUpdateInput, {nullable:false})
    @Type(() => BookingReferenceUpdateInput)
    update!: BookingReferenceUpdateInput;
}
