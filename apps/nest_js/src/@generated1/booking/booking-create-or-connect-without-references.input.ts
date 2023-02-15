import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BookingWhereUniqueInput } from './booking-where-unique.input';
import { Type } from 'class-transformer';
import { BookingCreateWithoutReferencesInput } from './booking-create-without-references.input';

@InputType()
export class BookingCreateOrConnectWithoutReferencesInput {

    @Field(() => BookingWhereUniqueInput, {nullable:false})
    @Type(() => BookingWhereUniqueInput)
    where!: BookingWhereUniqueInput;

    @Field(() => BookingCreateWithoutReferencesInput, {nullable:false})
    @Type(() => BookingCreateWithoutReferencesInput)
    create!: BookingCreateWithoutReferencesInput;
}
