import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BookingScalarWhereInput } from './booking-scalar-where.input';
import { Type } from 'class-transformer';
import { BookingUpdateManyMutationInput } from './booking-update-many-mutation.input';

@InputType()
export class BookingUpdateManyWithWhereWithoutDestinationCalendarInput {

    @Field(() => BookingScalarWhereInput, {nullable:false})
    @Type(() => BookingScalarWhereInput)
    where!: BookingScalarWhereInput;

    @Field(() => BookingUpdateManyMutationInput, {nullable:false})
    @Type(() => BookingUpdateManyMutationInput)
    data!: BookingUpdateManyMutationInput;
}
