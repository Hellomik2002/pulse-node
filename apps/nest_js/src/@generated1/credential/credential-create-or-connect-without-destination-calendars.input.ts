import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CredentialWhereUniqueInput } from './credential-where-unique.input';
import { Type } from 'class-transformer';
import { CredentialCreateWithoutDestinationCalendarsInput } from './credential-create-without-destination-calendars.input';

@InputType()
export class CredentialCreateOrConnectWithoutDestinationCalendarsInput {

    @Field(() => CredentialWhereUniqueInput, {nullable:false})
    @Type(() => CredentialWhereUniqueInput)
    where!: CredentialWhereUniqueInput;

    @Field(() => CredentialCreateWithoutDestinationCalendarsInput, {nullable:false})
    @Type(() => CredentialCreateWithoutDestinationCalendarsInput)
    create!: CredentialCreateWithoutDestinationCalendarsInput;
}
