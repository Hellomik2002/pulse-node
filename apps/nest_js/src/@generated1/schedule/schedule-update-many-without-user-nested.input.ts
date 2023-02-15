import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ScheduleCreateWithoutUserInput } from './schedule-create-without-user.input';
import { Type } from 'class-transformer';
import { ScheduleCreateOrConnectWithoutUserInput } from './schedule-create-or-connect-without-user.input';
import { ScheduleUpsertWithWhereUniqueWithoutUserInput } from './schedule-upsert-with-where-unique-without-user.input';
import { ScheduleCreateManyUserInputEnvelope } from './schedule-create-many-user-input-envelope.input';
import { ScheduleWhereUniqueInput } from './schedule-where-unique.input';
import { ScheduleUpdateWithWhereUniqueWithoutUserInput } from './schedule-update-with-where-unique-without-user.input';
import { ScheduleUpdateManyWithWhereWithoutUserInput } from './schedule-update-many-with-where-without-user.input';
import { ScheduleScalarWhereInput } from './schedule-scalar-where.input';

@InputType()
export class ScheduleUpdateManyWithoutUserNestedInput {

    @Field(() => [ScheduleCreateWithoutUserInput], {nullable:true})
    @Type(() => ScheduleCreateWithoutUserInput)
    create?: Array<ScheduleCreateWithoutUserInput>;

    @Field(() => [ScheduleCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => ScheduleCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<ScheduleCreateOrConnectWithoutUserInput>;

    @Field(() => [ScheduleUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => ScheduleUpsertWithWhereUniqueWithoutUserInput)
    upsert?: Array<ScheduleUpsertWithWhereUniqueWithoutUserInput>;

    @Field(() => ScheduleCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => ScheduleCreateManyUserInputEnvelope)
    createMany?: ScheduleCreateManyUserInputEnvelope;

    @Field(() => [ScheduleWhereUniqueInput], {nullable:true})
    @Type(() => ScheduleWhereUniqueInput)
    set?: Array<ScheduleWhereUniqueInput>;

    @Field(() => [ScheduleWhereUniqueInput], {nullable:true})
    @Type(() => ScheduleWhereUniqueInput)
    disconnect?: Array<ScheduleWhereUniqueInput>;

    @Field(() => [ScheduleWhereUniqueInput], {nullable:true})
    @Type(() => ScheduleWhereUniqueInput)
    delete?: Array<ScheduleWhereUniqueInput>;

    @Field(() => [ScheduleWhereUniqueInput], {nullable:true})
    @Type(() => ScheduleWhereUniqueInput)
    connect?: Array<ScheduleWhereUniqueInput>;

    @Field(() => [ScheduleUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => ScheduleUpdateWithWhereUniqueWithoutUserInput)
    update?: Array<ScheduleUpdateWithWhereUniqueWithoutUserInput>;

    @Field(() => [ScheduleUpdateManyWithWhereWithoutUserInput], {nullable:true})
    @Type(() => ScheduleUpdateManyWithWhereWithoutUserInput)
    updateMany?: Array<ScheduleUpdateManyWithWhereWithoutUserInput>;

    @Field(() => [ScheduleScalarWhereInput], {nullable:true})
    @Type(() => ScheduleScalarWhereInput)
    deleteMany?: Array<ScheduleScalarWhereInput>;
}
