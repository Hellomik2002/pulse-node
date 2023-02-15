import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BookingCreateWithoutReferencesInput } from './booking-create-without-references.input';
import { Type } from 'class-transformer';
import { BookingCreateOrConnectWithoutReferencesInput } from './booking-create-or-connect-without-references.input';
import { BookingUpsertWithoutReferencesInput } from './booking-upsert-without-references.input';
import { BookingWhereUniqueInput } from './booking-where-unique.input';
import { BookingUpdateWithoutReferencesInput } from './booking-update-without-references.input';

@InputType()
export class BookingUpdateOneWithoutReferencesNestedInput {

    @Field(() => BookingCreateWithoutReferencesInput, {nullable:true})
    @Type(() => BookingCreateWithoutReferencesInput)
    create?: BookingCreateWithoutReferencesInput;

    @Field(() => BookingCreateOrConnectWithoutReferencesInput, {nullable:true})
    @Type(() => BookingCreateOrConnectWithoutReferencesInput)
    connectOrCreate?: BookingCreateOrConnectWithoutReferencesInput;

    @Field(() => BookingUpsertWithoutReferencesInput, {nullable:true})
    @Type(() => BookingUpsertWithoutReferencesInput)
    upsert?: BookingUpsertWithoutReferencesInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => BookingWhereUniqueInput, {nullable:true})
    @Type(() => BookingWhereUniqueInput)
    connect?: BookingWhereUniqueInput;

    @Field(() => BookingUpdateWithoutReferencesInput, {nullable:true})
    @Type(() => BookingUpdateWithoutReferencesInput)
    update?: BookingUpdateWithoutReferencesInput;
}
