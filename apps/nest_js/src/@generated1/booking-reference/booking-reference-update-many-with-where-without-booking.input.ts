import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BookingReferenceScalarWhereInput } from './booking-reference-scalar-where.input';
import { Type } from 'class-transformer';
import { BookingReferenceUpdateManyMutationInput } from './booking-reference-update-many-mutation.input';

@InputType()
export class BookingReferenceUpdateManyWithWhereWithoutBookingInput {

    @Field(() => BookingReferenceScalarWhereInput, {nullable:false})
    @Type(() => BookingReferenceScalarWhereInput)
    where!: BookingReferenceScalarWhereInput;

    @Field(() => BookingReferenceUpdateManyMutationInput, {nullable:false})
    @Type(() => BookingReferenceUpdateManyMutationInput)
    data!: BookingReferenceUpdateManyMutationInput;
}
