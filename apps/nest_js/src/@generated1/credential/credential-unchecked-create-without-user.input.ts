import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { DestinationCalendarUncheckedCreateNestedManyWithoutCredentialInput } from '../destination-calendar/destination-calendar-unchecked-create-nested-many-without-credential.input';

@InputType()
export class CredentialUncheckedCreateWithoutUserInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    type!: string;

    @Field(() => GraphQLJSON, {nullable:false})
    key!: any;

    @Field(() => String, {nullable:true})
    appId?: string;

    @Field(() => DestinationCalendarUncheckedCreateNestedManyWithoutCredentialInput, {nullable:true})
    destinationCalendars?: DestinationCalendarUncheckedCreateNestedManyWithoutCredentialInput;

    @Field(() => Boolean, {nullable:true})
    invalid?: boolean;
}
