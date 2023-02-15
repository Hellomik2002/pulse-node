import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DestinationCalendarUpdateInput } from './destination-calendar-update.input';
import { Type } from 'class-transformer';
import { DestinationCalendarWhereUniqueInput } from './destination-calendar-where-unique.input';

@ArgsType()
export class UpdateOneDestinationCalendarArgs {

    @Field(() => DestinationCalendarUpdateInput, {nullable:false})
    @Type(() => DestinationCalendarUpdateInput)
    data!: DestinationCalendarUpdateInput;

    @Field(() => DestinationCalendarWhereUniqueInput, {nullable:false})
    @Type(() => DestinationCalendarWhereUniqueInput)
    where!: DestinationCalendarWhereUniqueInput;
}
