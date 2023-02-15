import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SelectedCalendarWhereInput } from './selected-calendar-where.input';

@InputType()
export class SelectedCalendarListRelationFilter {

    @Field(() => SelectedCalendarWhereInput, {nullable:true})
    every?: SelectedCalendarWhereInput;

    @Field(() => SelectedCalendarWhereInput, {nullable:true})
    some?: SelectedCalendarWhereInput;

    @Field(() => SelectedCalendarWhereInput, {nullable:true})
    none?: SelectedCalendarWhereInput;
}
