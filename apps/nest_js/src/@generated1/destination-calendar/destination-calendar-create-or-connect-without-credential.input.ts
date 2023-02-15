import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DestinationCalendarWhereUniqueInput } from './destination-calendar-where-unique.input';
import { Type } from 'class-transformer';
import { DestinationCalendarCreateWithoutCredentialInput } from './destination-calendar-create-without-credential.input';

@InputType()
export class DestinationCalendarCreateOrConnectWithoutCredentialInput {

    @Field(() => DestinationCalendarWhereUniqueInput, {nullable:false})
    @Type(() => DestinationCalendarWhereUniqueInput)
    where!: DestinationCalendarWhereUniqueInput;

    @Field(() => DestinationCalendarCreateWithoutCredentialInput, {nullable:false})
    @Type(() => DestinationCalendarCreateWithoutCredentialInput)
    create!: DestinationCalendarCreateWithoutCredentialInput;
}
