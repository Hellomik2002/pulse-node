import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BookingCreateWithoutUserInput } from './booking-create-without-user.input';
import { Type } from 'class-transformer';
import { BookingCreateOrConnectWithoutUserInput } from './booking-create-or-connect-without-user.input';
import { BookingUpsertWithWhereUniqueWithoutUserInput } from './booking-upsert-with-where-unique-without-user.input';
import { BookingCreateManyUserInputEnvelope } from './booking-create-many-user-input-envelope.input';
import { BookingWhereUniqueInput } from './booking-where-unique.input';
import { BookingUpdateWithWhereUniqueWithoutUserInput } from './booking-update-with-where-unique-without-user.input';
import { BookingUpdateManyWithWhereWithoutUserInput } from './booking-update-many-with-where-without-user.input';
import { BookingScalarWhereInput } from './booking-scalar-where.input';

@InputType()
export class BookingUpdateManyWithoutUserNestedInput {

    @Field(() => [BookingCreateWithoutUserInput], {nullable:true})
    @Type(() => BookingCreateWithoutUserInput)
    create?: Array<BookingCreateWithoutUserInput>;

    @Field(() => [BookingCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => BookingCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<BookingCreateOrConnectWithoutUserInput>;

    @Field(() => [BookingUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => BookingUpsertWithWhereUniqueWithoutUserInput)
    upsert?: Array<BookingUpsertWithWhereUniqueWithoutUserInput>;

    @Field(() => BookingCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => BookingCreateManyUserInputEnvelope)
    createMany?: BookingCreateManyUserInputEnvelope;

    @Field(() => [BookingWhereUniqueInput], {nullable:true})
    @Type(() => BookingWhereUniqueInput)
    set?: Array<BookingWhereUniqueInput>;

    @Field(() => [BookingWhereUniqueInput], {nullable:true})
    @Type(() => BookingWhereUniqueInput)
    disconnect?: Array<BookingWhereUniqueInput>;

    @Field(() => [BookingWhereUniqueInput], {nullable:true})
    @Type(() => BookingWhereUniqueInput)
    delete?: Array<BookingWhereUniqueInput>;

    @Field(() => [BookingWhereUniqueInput], {nullable:true})
    @Type(() => BookingWhereUniqueInput)
    connect?: Array<BookingWhereUniqueInput>;

    @Field(() => [BookingUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => BookingUpdateWithWhereUniqueWithoutUserInput)
    update?: Array<BookingUpdateWithWhereUniqueWithoutUserInput>;

    @Field(() => [BookingUpdateManyWithWhereWithoutUserInput], {nullable:true})
    @Type(() => BookingUpdateManyWithWhereWithoutUserInput)
    updateMany?: Array<BookingUpdateManyWithWhereWithoutUserInput>;

    @Field(() => [BookingScalarWhereInput], {nullable:true})
    @Type(() => BookingScalarWhereInput)
    deleteMany?: Array<BookingScalarWhereInput>;
}
