import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { GraphQLJSON } from 'graphql-type-json';
import { UserUpdateOneWithoutCredentialsNestedInput } from '../user/user-update-one-without-credentials-nested.input';
import { AppUpdateOneWithoutCredentialsNestedInput } from '../app/app-update-one-without-credentials-nested.input';
import { DestinationCalendarUpdateManyWithoutCredentialNestedInput } from '../destination-calendar/destination-calendar-update-many-without-credential-nested.input';
import { NullableBoolFieldUpdateOperationsInput } from '../prisma/nullable-bool-field-update-operations.input';

@InputType()
export class CredentialUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    type?: StringFieldUpdateOperationsInput;

    @Field(() => GraphQLJSON, {nullable:true})
    key?: any;

    @Field(() => UserUpdateOneWithoutCredentialsNestedInput, {nullable:true})
    user?: UserUpdateOneWithoutCredentialsNestedInput;

    @Field(() => AppUpdateOneWithoutCredentialsNestedInput, {nullable:true})
    app?: AppUpdateOneWithoutCredentialsNestedInput;

    @Field(() => DestinationCalendarUpdateManyWithoutCredentialNestedInput, {nullable:true})
    destinationCalendars?: DestinationCalendarUpdateManyWithoutCredentialNestedInput;

    @Field(() => NullableBoolFieldUpdateOperationsInput, {nullable:true})
    invalid?: NullableBoolFieldUpdateOperationsInput;
}
