import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SelectedCalendarWhereUniqueInput } from './selected-calendar-where-unique.input';
import { Type } from 'class-transformer';
import { SelectedCalendarUpdateWithoutUserInput } from './selected-calendar-update-without-user.input';

@InputType()
export class SelectedCalendarUpdateWithWhereUniqueWithoutUserInput {

    @Field(() => SelectedCalendarWhereUniqueInput, {nullable:false})
    @Type(() => SelectedCalendarWhereUniqueInput)
    where!: SelectedCalendarWhereUniqueInput;

    @Field(() => SelectedCalendarUpdateWithoutUserInput, {nullable:false})
    @Type(() => SelectedCalendarUpdateWithoutUserInput)
    data!: SelectedCalendarUpdateWithoutUserInput;
}
