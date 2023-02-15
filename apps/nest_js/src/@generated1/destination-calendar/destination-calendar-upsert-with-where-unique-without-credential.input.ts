import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DestinationCalendarWhereUniqueInput } from './destination-calendar-where-unique.input';
import { Type } from 'class-transformer';
import { DestinationCalendarUpdateWithoutCredentialInput } from './destination-calendar-update-without-credential.input';
import { DestinationCalendarCreateWithoutCredentialInput } from './destination-calendar-create-without-credential.input';

@InputType()
export class DestinationCalendarUpsertWithWhereUniqueWithoutCredentialInput {

    @Field(() => DestinationCalendarWhereUniqueInput, {nullable:false})
    @Type(() => DestinationCalendarWhereUniqueInput)
    where!: DestinationCalendarWhereUniqueInput;

    @Field(() => DestinationCalendarUpdateWithoutCredentialInput, {nullable:false})
    @Type(() => DestinationCalendarUpdateWithoutCredentialInput)
    update!: DestinationCalendarUpdateWithoutCredentialInput;

    @Field(() => DestinationCalendarCreateWithoutCredentialInput, {nullable:false})
    @Type(() => DestinationCalendarCreateWithoutCredentialInput)
    create!: DestinationCalendarCreateWithoutCredentialInput;
}
