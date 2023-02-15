import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SelectedCalendarCreateWithoutUserInput } from './selected-calendar-create-without-user.input';
import { Type } from 'class-transformer';
import { SelectedCalendarCreateOrConnectWithoutUserInput } from './selected-calendar-create-or-connect-without-user.input';
import { SelectedCalendarCreateManyUserInputEnvelope } from './selected-calendar-create-many-user-input-envelope.input';
import { SelectedCalendarWhereUniqueInput } from './selected-calendar-where-unique.input';

@InputType()
export class SelectedCalendarCreateNestedManyWithoutUserInput {

    @Field(() => [SelectedCalendarCreateWithoutUserInput], {nullable:true})
    @Type(() => SelectedCalendarCreateWithoutUserInput)
    create?: Array<SelectedCalendarCreateWithoutUserInput>;

    @Field(() => [SelectedCalendarCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => SelectedCalendarCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<SelectedCalendarCreateOrConnectWithoutUserInput>;

    @Field(() => SelectedCalendarCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => SelectedCalendarCreateManyUserInputEnvelope)
    createMany?: SelectedCalendarCreateManyUserInputEnvelope;

    @Field(() => [SelectedCalendarWhereUniqueInput], {nullable:true})
    @Type(() => SelectedCalendarWhereUniqueInput)
    connect?: Array<SelectedCalendarWhereUniqueInput>;
}
