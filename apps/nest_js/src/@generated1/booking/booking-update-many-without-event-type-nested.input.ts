import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BookingCreateWithoutEventTypeInput } from './booking-create-without-event-type.input';
import { Type } from 'class-transformer';
import { BookingCreateOrConnectWithoutEventTypeInput } from './booking-create-or-connect-without-event-type.input';
import { BookingUpsertWithWhereUniqueWithoutEventTypeInput } from './booking-upsert-with-where-unique-without-event-type.input';
import { BookingCreateManyEventTypeInputEnvelope } from './booking-create-many-event-type-input-envelope.input';
import { BookingWhereUniqueInput } from './booking-where-unique.input';
import { BookingUpdateWithWhereUniqueWithoutEventTypeInput } from './booking-update-with-where-unique-without-event-type.input';
import { BookingUpdateManyWithWhereWithoutEventTypeInput } from './booking-update-many-with-where-without-event-type.input';
import { BookingScalarWhereInput } from './booking-scalar-where.input';

@InputType()
export class BookingUpdateManyWithoutEventTypeNestedInput {

    @Field(() => [BookingCreateWithoutEventTypeInput], {nullable:true})
    @Type(() => BookingCreateWithoutEventTypeInput)
    create?: Array<BookingCreateWithoutEventTypeInput>;

    @Field(() => [BookingCreateOrConnectWithoutEventTypeInput], {nullable:true})
    @Type(() => BookingCreateOrConnectWithoutEventTypeInput)
    connectOrCreate?: Array<BookingCreateOrConnectWithoutEventTypeInput>;

    @Field(() => [BookingUpsertWithWhereUniqueWithoutEventTypeInput], {nullable:true})
    @Type(() => BookingUpsertWithWhereUniqueWithoutEventTypeInput)
    upsert?: Array<BookingUpsertWithWhereUniqueWithoutEventTypeInput>;

    @Field(() => BookingCreateManyEventTypeInputEnvelope, {nullable:true})
    @Type(() => BookingCreateManyEventTypeInputEnvelope)
    createMany?: BookingCreateManyEventTypeInputEnvelope;

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

    @Field(() => [BookingUpdateWithWhereUniqueWithoutEventTypeInput], {nullable:true})
    @Type(() => BookingUpdateWithWhereUniqueWithoutEventTypeInput)
    update?: Array<BookingUpdateWithWhereUniqueWithoutEventTypeInput>;

    @Field(() => [BookingUpdateManyWithWhereWithoutEventTypeInput], {nullable:true})
    @Type(() => BookingUpdateManyWithWhereWithoutEventTypeInput)
    updateMany?: Array<BookingUpdateManyWithWhereWithoutEventTypeInput>;

    @Field(() => [BookingScalarWhereInput], {nullable:true})
    @Type(() => BookingScalarWhereInput)
    deleteMany?: Array<BookingScalarWhereInput>;
}
