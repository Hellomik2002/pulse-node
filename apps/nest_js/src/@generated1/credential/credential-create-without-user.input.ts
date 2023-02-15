import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { AppCreateNestedOneWithoutCredentialsInput } from '../app/app-create-nested-one-without-credentials.input';
import { DestinationCalendarCreateNestedManyWithoutCredentialInput } from '../destination-calendar/destination-calendar-create-nested-many-without-credential.input';

@InputType()
export class CredentialCreateWithoutUserInput {

    @Field(() => String, {nullable:false})
    type!: string;

    @Field(() => GraphQLJSON, {nullable:false})
    key!: any;

    @Field(() => AppCreateNestedOneWithoutCredentialsInput, {nullable:true})
    app?: AppCreateNestedOneWithoutCredentialsInput;

    @Field(() => DestinationCalendarCreateNestedManyWithoutCredentialInput, {nullable:true})
    destinationCalendars?: DestinationCalendarCreateNestedManyWithoutCredentialInput;

    @Field(() => Boolean, {nullable:true})
    invalid?: boolean;
}
