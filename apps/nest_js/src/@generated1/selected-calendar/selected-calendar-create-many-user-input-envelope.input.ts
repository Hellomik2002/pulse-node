import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SelectedCalendarCreateManyUserInput } from './selected-calendar-create-many-user.input';
import { Type } from 'class-transformer';

@InputType()
export class SelectedCalendarCreateManyUserInputEnvelope {

    @Field(() => [SelectedCalendarCreateManyUserInput], {nullable:false})
    @Type(() => SelectedCalendarCreateManyUserInput)
    data!: Array<SelectedCalendarCreateManyUserInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
