import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DestinationCalendarWhereInput } from './destination-calendar-where.input';

@InputType()
export class DestinationCalendarRelationFilter {

    @Field(() => DestinationCalendarWhereInput, {nullable:true})
    is?: DestinationCalendarWhereInput;

    @Field(() => DestinationCalendarWhereInput, {nullable:true})
    isNot?: DestinationCalendarWhereInput;
}
