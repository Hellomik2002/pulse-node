import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CredentialUpdateWithoutDestinationCalendarsInput } from './credential-update-without-destination-calendars.input';
import { Type } from 'class-transformer';
import { CredentialCreateWithoutDestinationCalendarsInput } from './credential-create-without-destination-calendars.input';

@InputType()
export class CredentialUpsertWithoutDestinationCalendarsInput {

    @Field(() => CredentialUpdateWithoutDestinationCalendarsInput, {nullable:false})
    @Type(() => CredentialUpdateWithoutDestinationCalendarsInput)
    update!: CredentialUpdateWithoutDestinationCalendarsInput;

    @Field(() => CredentialCreateWithoutDestinationCalendarsInput, {nullable:false})
    @Type(() => CredentialCreateWithoutDestinationCalendarsInput)
    create!: CredentialCreateWithoutDestinationCalendarsInput;
}
