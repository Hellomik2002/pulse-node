import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ScheduleCreateWithoutEventTypeInput } from './schedule-create-without-event-type.input';
import { Type } from 'class-transformer';
import { ScheduleCreateOrConnectWithoutEventTypeInput } from './schedule-create-or-connect-without-event-type.input';
import { ScheduleUpsertWithoutEventTypeInput } from './schedule-upsert-without-event-type.input';
import { ScheduleWhereUniqueInput } from './schedule-where-unique.input';
import { ScheduleUpdateWithoutEventTypeInput } from './schedule-update-without-event-type.input';

@InputType()
export class ScheduleUpdateOneWithoutEventTypeNestedInput {

    @Field(() => ScheduleCreateWithoutEventTypeInput, {nullable:true})
    @Type(() => ScheduleCreateWithoutEventTypeInput)
    create?: ScheduleCreateWithoutEventTypeInput;

    @Field(() => ScheduleCreateOrConnectWithoutEventTypeInput, {nullable:true})
    @Type(() => ScheduleCreateOrConnectWithoutEventTypeInput)
    connectOrCreate?: ScheduleCreateOrConnectWithoutEventTypeInput;

    @Field(() => ScheduleUpsertWithoutEventTypeInput, {nullable:true})
    @Type(() => ScheduleUpsertWithoutEventTypeInput)
    upsert?: ScheduleUpsertWithoutEventTypeInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => ScheduleWhereUniqueInput, {nullable:true})
    @Type(() => ScheduleWhereUniqueInput)
    connect?: ScheduleWhereUniqueInput;

    @Field(() => ScheduleUpdateWithoutEventTypeInput, {nullable:true})
    @Type(() => ScheduleUpdateWithoutEventTypeInput)
    update?: ScheduleUpdateWithoutEventTypeInput;
}
