import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DestinationCalendarWhereInput } from './destination-calendar-where.input';

@InputType()
export class DestinationCalendarListRelationFilter {

    @Field(() => DestinationCalendarWhereInput, {nullable:true})
    every?: DestinationCalendarWhereInput;

    @Field(() => DestinationCalendarWhereInput, {nullable:true})
    some?: DestinationCalendarWhereInput;

    @Field(() => DestinationCalendarWhereInput, {nullable:true})
    none?: DestinationCalendarWhereInput;
}
