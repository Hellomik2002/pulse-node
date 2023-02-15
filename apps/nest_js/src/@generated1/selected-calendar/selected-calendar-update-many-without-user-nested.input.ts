import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SelectedCalendarCreateWithoutUserInput } from './selected-calendar-create-without-user.input';
import { Type } from 'class-transformer';
import { SelectedCalendarCreateOrConnectWithoutUserInput } from './selected-calendar-create-or-connect-without-user.input';
import { SelectedCalendarUpsertWithWhereUniqueWithoutUserInput } from './selected-calendar-upsert-with-where-unique-without-user.input';
import { SelectedCalendarCreateManyUserInputEnvelope } from './selected-calendar-create-many-user-input-envelope.input';
import { SelectedCalendarWhereUniqueInput } from './selected-calendar-where-unique.input';
import { SelectedCalendarUpdateWithWhereUniqueWithoutUserInput } from './selected-calendar-update-with-where-unique-without-user.input';
import { SelectedCalendarUpdateManyWithWhereWithoutUserInput } from './selected-calendar-update-many-with-where-without-user.input';
import { SelectedCalendarScalarWhereInput } from './selected-calendar-scalar-where.input';

@InputType()
export class SelectedCalendarUpdateManyWithoutUserNestedInput {

    @Field(() => [SelectedCalendarCreateWithoutUserInput], {nullable:true})
    @Type(() => SelectedCalendarCreateWithoutUserInput)
    create?: Array<SelectedCalendarCreateWithoutUserInput>;

    @Field(() => [SelectedCalendarCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => SelectedCalendarCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<SelectedCalendarCreateOrConnectWithoutUserInput>;

    @Field(() => [SelectedCalendarUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => SelectedCalendarUpsertWithWhereUniqueWithoutUserInput)
    upsert?: Array<SelectedCalendarUpsertWithWhereUniqueWithoutUserInput>;

    @Field(() => SelectedCalendarCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => SelectedCalendarCreateManyUserInputEnvelope)
    createMany?: SelectedCalendarCreateManyUserInputEnvelope;

    @Field(() => [SelectedCalendarWhereUniqueInput], {nullable:true})
    @Type(() => SelectedCalendarWhereUniqueInput)
    set?: Array<SelectedCalendarWhereUniqueInput>;

    @Field(() => [SelectedCalendarWhereUniqueInput], {nullable:true})
    @Type(() => SelectedCalendarWhereUniqueInput)
    disconnect?: Array<SelectedCalendarWhereUniqueInput>;

    @Field(() => [SelectedCalendarWhereUniqueInput], {nullable:true})
    @Type(() => SelectedCalendarWhereUniqueInput)
    delete?: Array<SelectedCalendarWhereUniqueInput>;

    @Field(() => [SelectedCalendarWhereUniqueInput], {nullable:true})
    @Type(() => SelectedCalendarWhereUniqueInput)
    connect?: Array<SelectedCalendarWhereUniqueInput>;

    @Field(() => [SelectedCalendarUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => SelectedCalendarUpdateWithWhereUniqueWithoutUserInput)
    update?: Array<SelectedCalendarUpdateWithWhereUniqueWithoutUserInput>;

    @Field(() => [SelectedCalendarUpdateManyWithWhereWithoutUserInput], {nullable:true})
    @Type(() => SelectedCalendarUpdateManyWithWhereWithoutUserInput)
    updateMany?: Array<SelectedCalendarUpdateManyWithWhereWithoutUserInput>;

    @Field(() => [SelectedCalendarScalarWhereInput], {nullable:true})
    @Type(() => SelectedCalendarScalarWhereInput)
    deleteMany?: Array<SelectedCalendarScalarWhereInput>;
}
