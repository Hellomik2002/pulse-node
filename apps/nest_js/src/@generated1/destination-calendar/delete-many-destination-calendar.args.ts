import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DestinationCalendarWhereInput } from './destination-calendar-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyDestinationCalendarArgs {

    @Field(() => DestinationCalendarWhereInput, {nullable:true})
    @Type(() => DestinationCalendarWhereInput)
    where?: DestinationCalendarWhereInput;
}
