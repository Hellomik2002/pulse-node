import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SelectedCalendarUpdateInput } from './selected-calendar-update.input';
import { Type } from 'class-transformer';
import { SelectedCalendarWhereUniqueInput } from './selected-calendar-where-unique.input';

@ArgsType()
export class UpdateOneSelectedCalendarArgs {

    @Field(() => SelectedCalendarUpdateInput, {nullable:false})
    @Type(() => SelectedCalendarUpdateInput)
    data!: SelectedCalendarUpdateInput;

    @Field(() => SelectedCalendarWhereUniqueInput, {nullable:false})
    @Type(() => SelectedCalendarWhereUniqueInput)
    where!: SelectedCalendarWhereUniqueInput;
}
