import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SelectedCalendarWhereUniqueInput } from './selected-calendar-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueSelectedCalendarArgs {

    @Field(() => SelectedCalendarWhereUniqueInput, {nullable:false})
    @Type(() => SelectedCalendarWhereUniqueInput)
    where!: SelectedCalendarWhereUniqueInput;
}
