import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DestinationCalendarUpdateWithoutUserInput } from './destination-calendar-update-without-user.input';
import { Type } from 'class-transformer';
import { DestinationCalendarCreateWithoutUserInput } from './destination-calendar-create-without-user.input';

@InputType()
export class DestinationCalendarUpsertWithoutUserInput {

    @Field(() => DestinationCalendarUpdateWithoutUserInput, {nullable:false})
    @Type(() => DestinationCalendarUpdateWithoutUserInput)
    update!: DestinationCalendarUpdateWithoutUserInput;

    @Field(() => DestinationCalendarCreateWithoutUserInput, {nullable:false})
    @Type(() => DestinationCalendarCreateWithoutUserInput)
    create!: DestinationCalendarCreateWithoutUserInput;
}
