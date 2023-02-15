import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SelectedCalendarCreateManyInput } from './selected-calendar-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManySelectedCalendarArgs {

    @Field(() => [SelectedCalendarCreateManyInput], {nullable:false})
    @Type(() => SelectedCalendarCreateManyInput)
    data!: Array<SelectedCalendarCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
