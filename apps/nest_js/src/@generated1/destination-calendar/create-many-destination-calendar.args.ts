import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DestinationCalendarCreateManyInput } from './destination-calendar-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyDestinationCalendarArgs {

    @Field(() => [DestinationCalendarCreateManyInput], {nullable:false})
    @Type(() => DestinationCalendarCreateManyInput)
    data!: Array<DestinationCalendarCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
