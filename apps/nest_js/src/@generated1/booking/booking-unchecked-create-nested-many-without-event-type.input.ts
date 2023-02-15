import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BookingCreateWithoutEventTypeInput } from './booking-create-without-event-type.input';
import { Type } from 'class-transformer';
import { BookingCreateOrConnectWithoutEventTypeInput } from './booking-create-or-connect-without-event-type.input';
import { BookingCreateManyEventTypeInputEnvelope } from './booking-create-many-event-type-input-envelope.input';
import { BookingWhereUniqueInput } from './booking-where-unique.input';

@InputType()
export class BookingUncheckedCreateNestedManyWithoutEventTypeInput {

    @Field(() => [BookingCreateWithoutEventTypeInput], {nullable:true})
    @Type(() => BookingCreateWithoutEventTypeInput)
    create?: Array<BookingCreateWithoutEventTypeInput>;

    @Field(() => [BookingCreateOrConnectWithoutEventTypeInput], {nullable:true})
    @Type(() => BookingCreateOrConnectWithoutEventTypeInput)
    connectOrCreate?: Array<BookingCreateOrConnectWithoutEventTypeInput>;

    @Field(() => BookingCreateManyEventTypeInputEnvelope, {nullable:true})
    @Type(() => BookingCreateManyEventTypeInputEnvelope)
    createMany?: BookingCreateManyEventTypeInputEnvelope;

    @Field(() => [BookingWhereUniqueInput], {nullable:true})
    @Type(() => BookingWhereUniqueInput)
    connect?: Array<BookingWhereUniqueInput>;
}
