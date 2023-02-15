import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DestinationCalendarWhereUniqueInput } from './destination-calendar-where-unique.input';
import { Type } from 'class-transformer';
import { DestinationCalendarCreateWithoutUserInput } from './destination-calendar-create-without-user.input';

@InputType()
export class DestinationCalendarCreateOrConnectWithoutUserInput {

    @Field(() => DestinationCalendarWhereUniqueInput, {nullable:false})
    @Type(() => DestinationCalendarWhereUniqueInput)
    where!: DestinationCalendarWhereUniqueInput;

    @Field(() => DestinationCalendarCreateWithoutUserInput, {nullable:false})
    @Type(() => DestinationCalendarCreateWithoutUserInput)
    create!: DestinationCalendarCreateWithoutUserInput;
}
