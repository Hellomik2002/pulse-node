import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CredentialCreateWithoutDestinationCalendarsInput } from './credential-create-without-destination-calendars.input';
import { Type } from 'class-transformer';
import { CredentialCreateOrConnectWithoutDestinationCalendarsInput } from './credential-create-or-connect-without-destination-calendars.input';
import { CredentialUpsertWithoutDestinationCalendarsInput } from './credential-upsert-without-destination-calendars.input';
import { CredentialWhereUniqueInput } from './credential-where-unique.input';
import { CredentialUpdateWithoutDestinationCalendarsInput } from './credential-update-without-destination-calendars.input';

@InputType()
export class CredentialUpdateOneWithoutDestinationCalendarsNestedInput {

    @Field(() => CredentialCreateWithoutDestinationCalendarsInput, {nullable:true})
    @Type(() => CredentialCreateWithoutDestinationCalendarsInput)
    create?: CredentialCreateWithoutDestinationCalendarsInput;

    @Field(() => CredentialCreateOrConnectWithoutDestinationCalendarsInput, {nullable:true})
    @Type(() => CredentialCreateOrConnectWithoutDestinationCalendarsInput)
    connectOrCreate?: CredentialCreateOrConnectWithoutDestinationCalendarsInput;

    @Field(() => CredentialUpsertWithoutDestinationCalendarsInput, {nullable:true})
    @Type(() => CredentialUpsertWithoutDestinationCalendarsInput)
    upsert?: CredentialUpsertWithoutDestinationCalendarsInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => CredentialWhereUniqueInput, {nullable:true})
    @Type(() => CredentialWhereUniqueInput)
    connect?: CredentialWhereUniqueInput;

    @Field(() => CredentialUpdateWithoutDestinationCalendarsInput, {nullable:true})
    @Type(() => CredentialUpdateWithoutDestinationCalendarsInput)
    update?: CredentialUpdateWithoutDestinationCalendarsInput;
}
