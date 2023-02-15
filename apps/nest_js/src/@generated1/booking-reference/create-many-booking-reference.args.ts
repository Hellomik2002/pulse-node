import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BookingReferenceCreateManyInput } from './booking-reference-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyBookingReferenceArgs {

    @Field(() => [BookingReferenceCreateManyInput], {nullable:false})
    @Type(() => BookingReferenceCreateManyInput)
    data!: Array<BookingReferenceCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
