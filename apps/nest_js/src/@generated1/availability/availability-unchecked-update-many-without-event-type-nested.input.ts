import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AvailabilityCreateWithoutEventTypeInput } from './availability-create-without-event-type.input';
import { Type } from 'class-transformer';
import { AvailabilityCreateOrConnectWithoutEventTypeInput } from './availability-create-or-connect-without-event-type.input';
import { AvailabilityUpsertWithWhereUniqueWithoutEventTypeInput } from './availability-upsert-with-where-unique-without-event-type.input';
import { AvailabilityCreateManyEventTypeInputEnvelope } from './availability-create-many-event-type-input-envelope.input';
import { AvailabilityWhereUniqueInput } from './availability-where-unique.input';
import { AvailabilityUpdateWithWhereUniqueWithoutEventTypeInput } from './availability-update-with-where-unique-without-event-type.input';
import { AvailabilityUpdateManyWithWhereWithoutEventTypeInput } from './availability-update-many-with-where-without-event-type.input';
import { AvailabilityScalarWhereInput } from './availability-scalar-where.input';

@InputType()
export class AvailabilityUncheckedUpdateManyWithoutEventTypeNestedInput {

    @Field(() => [AvailabilityCreateWithoutEventTypeInput], {nullable:true})
    @Type(() => AvailabilityCreateWithoutEventTypeInput)
    create?: Array<AvailabilityCreateWithoutEventTypeInput>;

    @Field(() => [AvailabilityCreateOrConnectWithoutEventTypeInput], {nullable:true})
    @Type(() => AvailabilityCreateOrConnectWithoutEventTypeInput)
    connectOrCreate?: Array<AvailabilityCreateOrConnectWithoutEventTypeInput>;

    @Field(() => [AvailabilityUpsertWithWhereUniqueWithoutEventTypeInput], {nullable:true})
    @Type(() => AvailabilityUpsertWithWhereUniqueWithoutEventTypeInput)
    upsert?: Array<AvailabilityUpsertWithWhereUniqueWithoutEventTypeInput>;

    @Field(() => AvailabilityCreateManyEventTypeInputEnvelope, {nullable:true})
    @Type(() => AvailabilityCreateManyEventTypeInputEnvelope)
    createMany?: AvailabilityCreateManyEventTypeInputEnvelope;

    @Field(() => [AvailabilityWhereUniqueInput], {nullable:true})
    @Type(() => AvailabilityWhereUniqueInput)
    set?: Array<AvailabilityWhereUniqueInput>;

    @Field(() => [AvailabilityWhereUniqueInput], {nullable:true})
    @Type(() => AvailabilityWhereUniqueInput)
    disconnect?: Array<AvailabilityWhereUniqueInput>;

    @Field(() => [AvailabilityWhereUniqueInput], {nullable:true})
    @Type(() => AvailabilityWhereUniqueInput)
    delete?: Array<AvailabilityWhereUniqueInput>;

    @Field(() => [AvailabilityWhereUniqueInput], {nullable:true})
    @Type(() => AvailabilityWhereUniqueInput)
    connect?: Array<AvailabilityWhereUniqueInput>;

    @Field(() => [AvailabilityUpdateWithWhereUniqueWithoutEventTypeInput], {nullable:true})
    @Type(() => AvailabilityUpdateWithWhereUniqueWithoutEventTypeInput)
    update?: Array<AvailabilityUpdateWithWhereUniqueWithoutEventTypeInput>;

    @Field(() => [AvailabilityUpdateManyWithWhereWithoutEventTypeInput], {nullable:true})
    @Type(() => AvailabilityUpdateManyWithWhereWithoutEventTypeInput)
    updateMany?: Array<AvailabilityUpdateManyWithWhereWithoutEventTypeInput>;

    @Field(() => [AvailabilityScalarWhereInput], {nullable:true})
    @Type(() => AvailabilityScalarWhereInput)
    deleteMany?: Array<AvailabilityScalarWhereInput>;
}
