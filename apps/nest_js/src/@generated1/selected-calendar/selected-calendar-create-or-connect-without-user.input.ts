import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SelectedCalendarWhereUniqueInput } from './selected-calendar-where-unique.input';
import { Type } from 'class-transformer';
import { SelectedCalendarCreateWithoutUserInput } from './selected-calendar-create-without-user.input';

@InputType()
export class SelectedCalendarCreateOrConnectWithoutUserInput {

    @Field(() => SelectedCalendarWhereUniqueInput, {nullable:false})
    @Type(() => SelectedCalendarWhereUniqueInput)
    where!: SelectedCalendarWhereUniqueInput;

    @Field(() => SelectedCalendarCreateWithoutUserInput, {nullable:false})
    @Type(() => SelectedCalendarCreateWithoutUserInput)
    create!: SelectedCalendarCreateWithoutUserInput;
}
