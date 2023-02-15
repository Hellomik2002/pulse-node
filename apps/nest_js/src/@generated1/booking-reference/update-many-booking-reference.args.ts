import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BookingReferenceUpdateManyMutationInput } from './booking-reference-update-many-mutation.input';
import { Type } from 'class-transformer';
import { BookingReferenceWhereInput } from './booking-reference-where.input';

@ArgsType()
export class UpdateManyBookingReferenceArgs {

    @Field(() => BookingReferenceUpdateManyMutationInput, {nullable:false})
    @Type(() => BookingReferenceUpdateManyMutationInput)
    data!: BookingReferenceUpdateManyMutationInput;

    @Field(() => BookingReferenceWhereInput, {nullable:true})
    @Type(() => BookingReferenceWhereInput)
    where?: BookingReferenceWhereInput;
}
