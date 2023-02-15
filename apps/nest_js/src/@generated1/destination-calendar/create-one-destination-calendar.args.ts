import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DestinationCalendarCreateInput } from './destination-calendar-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneDestinationCalendarArgs {

    @Field(() => DestinationCalendarCreateInput, {nullable:false})
    @Type(() => DestinationCalendarCreateInput)
    data!: DestinationCalendarCreateInput;
}
