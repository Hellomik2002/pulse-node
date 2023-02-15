import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SelectedCalendarWhereUniqueInput } from './selected-calendar-where-unique.input';
import { Type } from 'class-transformer';
import { SelectedCalendarCreateInput } from './selected-calendar-create.input';
import { SelectedCalendarUpdateInput } from './selected-calendar-update.input';

@ArgsType()
export class UpsertOneSelectedCalendarArgs {

    @Field(() => SelectedCalendarWhereUniqueInput, {nullable:false})
    @Type(() => SelectedCalendarWhereUniqueInput)
    where!: SelectedCalendarWhereUniqueInput;

    @Field(() => SelectedCalendarCreateInput, {nullable:false})
    @Type(() => SelectedCalendarCreateInput)
    create!: SelectedCalendarCreateInput;

    @Field(() => SelectedCalendarUpdateInput, {nullable:false})
    @Type(() => SelectedCalendarUpdateInput)
    update!: SelectedCalendarUpdateInput;
}
