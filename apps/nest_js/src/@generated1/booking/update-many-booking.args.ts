import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BookingUpdateManyMutationInput } from './booking-update-many-mutation.input';
import { Type } from 'class-transformer';
import { BookingWhereInput } from './booking-where.input';

@ArgsType()
export class UpdateManyBookingArgs {

    @Field(() => BookingUpdateManyMutationInput, {nullable:false})
    @Type(() => BookingUpdateManyMutationInput)
    data!: BookingUpdateManyMutationInput;

    @Field(() => BookingWhereInput, {nullable:true})
    @Type(() => BookingWhereInput)
    where?: BookingWhereInput;
}
