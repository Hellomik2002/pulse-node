import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ScheduleCreateWithoutUserInput } from './schedule-create-without-user.input';
import { Type } from 'class-transformer';
import { ScheduleCreateOrConnectWithoutUserInput } from './schedule-create-or-connect-without-user.input';
import { ScheduleCreateManyUserInputEnvelope } from './schedule-create-many-user-input-envelope.input';
import { ScheduleWhereUniqueInput } from './schedule-where-unique.input';

@InputType()
export class ScheduleCreateNestedManyWithoutUserInput {

    @Field(() => [ScheduleCreateWithoutUserInput], {nullable:true})
    @Type(() => ScheduleCreateWithoutUserInput)
    create?: Array<ScheduleCreateWithoutUserInput>;

    @Field(() => [ScheduleCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => ScheduleCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<ScheduleCreateOrConnectWithoutUserInput>;

    @Field(() => ScheduleCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => ScheduleCreateManyUserInputEnvelope)
    createMany?: ScheduleCreateManyUserInputEnvelope;

    @Field(() => [ScheduleWhereUniqueInput], {nullable:true})
    @Type(() => ScheduleWhereUniqueInput)
    connect?: Array<ScheduleWhereUniqueInput>;
}
