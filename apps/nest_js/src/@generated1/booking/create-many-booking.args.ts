import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BookingCreateManyInput } from './booking-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyBookingArgs {

    @Field(() => [BookingCreateManyInput], {nullable:false})
    @Type(() => BookingCreateManyInput)
    data!: Array<BookingCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
