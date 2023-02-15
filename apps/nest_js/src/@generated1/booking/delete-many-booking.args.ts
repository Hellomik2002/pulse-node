import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BookingWhereInput } from './booking-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyBookingArgs {

    @Field(() => BookingWhereInput, {nullable:true})
    @Type(() => BookingWhereInput)
    where?: BookingWhereInput;
}
