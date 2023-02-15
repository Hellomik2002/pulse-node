import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventTypeCreateWithoutOwnerInput } from './event-type-create-without-owner.input';
import { Type } from 'class-transformer';
import { EventTypeCreateOrConnectWithoutOwnerInput } from './event-type-create-or-connect-without-owner.input';
import { EventTypeUpsertWithWhereUniqueWithoutOwnerInput } from './event-type-upsert-with-where-unique-without-owner.input';
import { EventTypeCreateManyOwnerInputEnvelope } from './event-type-create-many-owner-input-envelope.input';
import { EventTypeWhereUniqueInput } from './event-type-where-unique.input';
import { EventTypeUpdateWithWhereUniqueWithoutOwnerInput } from './event-type-update-with-where-unique-without-owner.input';
import { EventTypeUpdateManyWithWhereWithoutOwnerInput } from './event-type-update-many-with-where-without-owner.input';
import { EventTypeScalarWhereInput } from './event-type-scalar-where.input';

@InputType()
export class EventTypeUpdateManyWithoutOwnerNestedInput {

    @Field(() => [EventTypeCreateWithoutOwnerInput], {nullable:true})
    @Type(() => EventTypeCreateWithoutOwnerInput)
    create?: Array<EventTypeCreateWithoutOwnerInput>;

    @Field(() => [EventTypeCreateOrConnectWithoutOwnerInput], {nullable:true})
    @Type(() => EventTypeCreateOrConnectWithoutOwnerInput)
    connectOrCreate?: Array<EventTypeCreateOrConnectWithoutOwnerInput>;

    @Field(() => [EventTypeUpsertWithWhereUniqueWithoutOwnerInput], {nullable:true})
    @Type(() => EventTypeUpsertWithWhereUniqueWithoutOwnerInput)
    upsert?: Array<EventTypeUpsertWithWhereUniqueWithoutOwnerInput>;

    @Field(() => EventTypeCreateManyOwnerInputEnvelope, {nullable:true})
    @Type(() => EventTypeCreateManyOwnerInputEnvelope)
    createMany?: EventTypeCreateManyOwnerInputEnvelope;

    @Field(() => [EventTypeWhereUniqueInput], {nullable:true})
    @Type(() => EventTypeWhereUniqueInput)
    set?: Array<EventTypeWhereUniqueInput>;

    @Field(() => [EventTypeWhereUniqueInput], {nullable:true})
    @Type(() => EventTypeWhereUniqueInput)
    disconnect?: Array<EventTypeWhereUniqueInput>;

    @Field(() => [EventTypeWhereUniqueInput], {nullable:true})
    @Type(() => EventTypeWhereUniqueInput)
    delete?: Array<EventTypeWhereUniqueInput>;

    @Field(() => [EventTypeWhereUniqueInput], {nullable:true})
    @Type(() => EventTypeWhereUniqueInput)
    connect?: Array<EventTypeWhereUniqueInput>;

    @Field(() => [EventTypeUpdateWithWhereUniqueWithoutOwnerInput], {nullable:true})
    @Type(() => EventTypeUpdateWithWhereUniqueWithoutOwnerInput)
    update?: Array<EventTypeUpdateWithWhereUniqueWithoutOwnerInput>;

    @Field(() => [EventTypeUpdateManyWithWhereWithoutOwnerInput], {nullable:true})
    @Type(() => EventTypeUpdateManyWithWhereWithoutOwnerInput)
    updateMany?: Array<EventTypeUpdateManyWithWhereWithoutOwnerInput>;

    @Field(() => [EventTypeScalarWhereInput], {nullable:true})
    @Type(() => EventTypeScalarWhereInput)
    deleteMany?: Array<EventTypeScalarWhereInput>;
}
