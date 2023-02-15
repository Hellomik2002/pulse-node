import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DestinationCalendarWhereUniqueInput } from './destination-calendar-where-unique.input';
import { Type } from 'class-transformer';
import { DestinationCalendarCreateInput } from './destination-calendar-create.input';
import { DestinationCalendarUpdateInput } from './destination-calendar-update.input';

@ArgsType()
export class UpsertOneDestinationCalendarArgs {

    @Field(() => DestinationCalendarWhereUniqueInput, {nullable:false})
    @Type(() => DestinationCalendarWhereUniqueInput)
    where!: DestinationCalendarWhereUniqueInput;

    @Field(() => DestinationCalendarCreateInput, {nullable:false})
    @Type(() => DestinationCalendarCreateInput)
    create!: DestinationCalendarCreateInput;

    @Field(() => DestinationCalendarUpdateInput, {nullable:false})
    @Type(() => DestinationCalendarUpdateInput)
    update!: DestinationCalendarUpdateInput;
}
