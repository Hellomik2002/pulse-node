import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HostCreateWithoutEventTypeInput } from './host-create-without-event-type.input';
import { Type } from 'class-transformer';
import { HostCreateOrConnectWithoutEventTypeInput } from './host-create-or-connect-without-event-type.input';
import { HostUpsertWithWhereUniqueWithoutEventTypeInput } from './host-upsert-with-where-unique-without-event-type.input';
import { HostCreateManyEventTypeInputEnvelope } from './host-create-many-event-type-input-envelope.input';
import { HostWhereUniqueInput } from './host-where-unique.input';
import { HostUpdateWithWhereUniqueWithoutEventTypeInput } from './host-update-with-where-unique-without-event-type.input';
import { HostUpdateManyWithWhereWithoutEventTypeInput } from './host-update-many-with-where-without-event-type.input';
import { HostScalarWhereInput } from './host-scalar-where.input';

@InputType()
export class HostUpdateManyWithoutEventTypeNestedInput {

    @Field(() => [HostCreateWithoutEventTypeInput], {nullable:true})
    @Type(() => HostCreateWithoutEventTypeInput)
    create?: Array<HostCreateWithoutEventTypeInput>;

    @Field(() => [HostCreateOrConnectWithoutEventTypeInput], {nullable:true})
    @Type(() => HostCreateOrConnectWithoutEventTypeInput)
    connectOrCreate?: Array<HostCreateOrConnectWithoutEventTypeInput>;

    @Field(() => [HostUpsertWithWhereUniqueWithoutEventTypeInput], {nullable:true})
    @Type(() => HostUpsertWithWhereUniqueWithoutEventTypeInput)
    upsert?: Array<HostUpsertWithWhereUniqueWithoutEventTypeInput>;

    @Field(() => HostCreateManyEventTypeInputEnvelope, {nullable:true})
    @Type(() => HostCreateManyEventTypeInputEnvelope)
    createMany?: HostCreateManyEventTypeInputEnvelope;

    @Field(() => [HostWhereUniqueInput], {nullable:true})
    @Type(() => HostWhereUniqueInput)
    set?: Array<HostWhereUniqueInput>;

    @Field(() => [HostWhereUniqueInput], {nullable:true})
    @Type(() => HostWhereUniqueInput)
    disconnect?: Array<HostWhereUniqueInput>;

    @Field(() => [HostWhereUniqueInput], {nullable:true})
    @Type(() => HostWhereUniqueInput)
    delete?: Array<HostWhereUniqueInput>;

    @Field(() => [HostWhereUniqueInput], {nullable:true})
    @Type(() => HostWhereUniqueInput)
    connect?: Array<HostWhereUniqueInput>;

    @Field(() => [HostUpdateWithWhereUniqueWithoutEventTypeInput], {nullable:true})
    @Type(() => HostUpdateWithWhereUniqueWithoutEventTypeInput)
    update?: Array<HostUpdateWithWhereUniqueWithoutEventTypeInput>;

    @Field(() => [HostUpdateManyWithWhereWithoutEventTypeInput], {nullable:true})
    @Type(() => HostUpdateManyWithWhereWithoutEventTypeInput)
    updateMany?: Array<HostUpdateManyWithWhereWithoutEventTypeInput>;

    @Field(() => [HostScalarWhereInput], {nullable:true})
    @Type(() => HostScalarWhereInput)
    deleteMany?: Array<HostScalarWhereInput>;
}
