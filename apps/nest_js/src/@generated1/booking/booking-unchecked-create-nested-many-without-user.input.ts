import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BookingCreateWithoutUserInput } from './booking-create-without-user.input';
import { Type } from 'class-transformer';
import { BookingCreateOrConnectWithoutUserInput } from './booking-create-or-connect-without-user.input';
import { BookingCreateManyUserInputEnvelope } from './booking-create-many-user-input-envelope.input';
import { BookingWhereUniqueInput } from './booking-where-unique.input';

@InputType()
export class BookingUncheckedCreateNestedManyWithoutUserInput {

    @Field(() => [BookingCreateWithoutUserInput], {nullable:true})
    @Type(() => BookingCreateWithoutUserInput)
    create?: Array<BookingCreateWithoutUserInput>;

    @Field(() => [BookingCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => BookingCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<BookingCreateOrConnectWithoutUserInput>;

    @Field(() => BookingCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => BookingCreateManyUserInputEnvelope)
    createMany?: BookingCreateManyUserInputEnvelope;

    @Field(() => [BookingWhereUniqueInput], {nullable:true})
    @Type(() => BookingWhereUniqueInput)
    connect?: Array<BookingWhereUniqueInput>;
}
