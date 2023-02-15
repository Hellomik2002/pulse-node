import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BookingUpdateWithoutReferencesInput } from './booking-update-without-references.input';
import { Type } from 'class-transformer';
import { BookingCreateWithoutReferencesInput } from './booking-create-without-references.input';

@InputType()
export class BookingUpsertWithoutReferencesInput {

    @Field(() => BookingUpdateWithoutReferencesInput, {nullable:false})
    @Type(() => BookingUpdateWithoutReferencesInput)
    update!: BookingUpdateWithoutReferencesInput;

    @Field(() => BookingCreateWithoutReferencesInput, {nullable:false})
    @Type(() => BookingCreateWithoutReferencesInput)
    create!: BookingCreateWithoutReferencesInput;
}
