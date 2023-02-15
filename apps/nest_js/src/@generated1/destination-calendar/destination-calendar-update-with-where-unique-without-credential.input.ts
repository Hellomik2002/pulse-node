import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DestinationCalendarWhereUniqueInput } from './destination-calendar-where-unique.input';
import { Type } from 'class-transformer';
import { DestinationCalendarUpdateWithoutCredentialInput } from './destination-calendar-update-without-credential.input';

@InputType()
export class DestinationCalendarUpdateWithWhereUniqueWithoutCredentialInput {

    @Field(() => DestinationCalendarWhereUniqueInput, {nullable:false})
    @Type(() => DestinationCalendarWhereUniqueInput)
    where!: DestinationCalendarWhereUniqueInput;

    @Field(() => DestinationCalendarUpdateWithoutCredentialInput, {nullable:false})
    @Type(() => DestinationCalendarUpdateWithoutCredentialInput)
    data!: DestinationCalendarUpdateWithoutCredentialInput;
}
