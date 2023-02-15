import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BookingCreateWithoutReferencesInput } from './booking-create-without-references.input';
import { Type } from 'class-transformer';
import { BookingCreateOrConnectWithoutReferencesInput } from './booking-create-or-connect-without-references.input';
import { BookingWhereUniqueInput } from './booking-where-unique.input';

@InputType()
export class BookingCreateNestedOneWithoutReferencesInput {

    @Field(() => BookingCreateWithoutReferencesInput, {nullable:true})
    @Type(() => BookingCreateWithoutReferencesInput)
    create?: BookingCreateWithoutReferencesInput;

    @Field(() => BookingCreateOrConnectWithoutReferencesInput, {nullable:true})
    @Type(() => BookingCreateOrConnectWithoutReferencesInput)
    connectOrCreate?: BookingCreateOrConnectWithoutReferencesInput;

    @Field(() => BookingWhereUniqueInput, {nullable:true})
    @Type(() => BookingWhereUniqueInput)
    connect?: BookingWhereUniqueInput;
}
