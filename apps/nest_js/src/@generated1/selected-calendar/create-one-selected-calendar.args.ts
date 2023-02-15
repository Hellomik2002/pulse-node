import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SelectedCalendarCreateInput } from './selected-calendar-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneSelectedCalendarArgs {

    @Field(() => SelectedCalendarCreateInput, {nullable:false})
    @Type(() => SelectedCalendarCreateInput)
    data!: SelectedCalendarCreateInput;
}
