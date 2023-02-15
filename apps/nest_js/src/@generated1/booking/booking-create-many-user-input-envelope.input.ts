import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BookingCreateManyUserInput } from './booking-create-many-user.input';
import { Type } from 'class-transformer';

@InputType()
export class BookingCreateManyUserInputEnvelope {

    @Field(() => [BookingCreateManyUserInput], {nullable:false})
    @Type(() => BookingCreateManyUserInput)
    data!: Array<BookingCreateManyUserInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
