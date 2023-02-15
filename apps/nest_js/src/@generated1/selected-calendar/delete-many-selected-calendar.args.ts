import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SelectedCalendarWhereInput } from './selected-calendar-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManySelectedCalendarArgs {

    @Field(() => SelectedCalendarWhereInput, {nullable:true})
    @Type(() => SelectedCalendarWhereInput)
    where?: SelectedCalendarWhereInput;
}
