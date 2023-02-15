import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { App_RoutingForms_FormUpdateOneRequiredWithoutResponsesNestedInput } from '../app-routing-forms-form/app-routing-forms-form-update-one-required-without-responses-nested.input';
import { GraphQLJSON } from 'graphql-type-json';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';

@InputType()
export class App_RoutingForms_FormResponseUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    formFillerId?: StringFieldUpdateOperationsInput;

    @Field(() => App_RoutingForms_FormUpdateOneRequiredWithoutResponsesNestedInput, {nullable:true})
    form?: App_RoutingForms_FormUpdateOneRequiredWithoutResponsesNestedInput;

    @Field(() => GraphQLJSON, {nullable:true})
    response?: any;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;
}
