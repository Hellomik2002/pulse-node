import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CredentialCreateWithoutDestinationCalendarsInput } from './credential-create-without-destination-calendars.input';
import { Type } from 'class-transformer';
import { CredentialCreateOrConnectWithoutDestinationCalendarsInput } from './credential-create-or-connect-without-destination-calendars.input';
import { CredentialWhereUniqueInput } from './credential-where-unique.input';

@InputType()
export class CredentialCreateNestedOneWithoutDestinationCalendarsInput {

    @Field(() => CredentialCreateWithoutDestinationCalendarsInput, {nullable:true})
    @Type(() => CredentialCreateWithoutDestinationCalendarsInput)
    create?: CredentialCreateWithoutDestinationCalendarsInput;

    @Field(() => CredentialCreateOrConnectWithoutDestinationCalendarsInput, {nullable:true})
    @Type(() => CredentialCreateOrConnectWithoutDestinationCalendarsInput)
    connectOrCreate?: CredentialCreateOrConnectWithoutDestinationCalendarsInput;

    @Field(() => CredentialWhereUniqueInput, {nullable:true})
    @Type(() => CredentialWhereUniqueInput)
    connect?: CredentialWhereUniqueInput;
}
