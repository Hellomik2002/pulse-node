import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { App_RoutingForms_FormResponseFormFillerIdFormIdCompoundUniqueInput } from './app-routing-forms-form-response-form-filler-id-form-id-compound-unique.input';

@InputType()
export class App_RoutingForms_FormResponseWhereUniqueInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => App_RoutingForms_FormResponseFormFillerIdFormIdCompoundUniqueInput, {nullable:true})
    formFillerId_formId?: App_RoutingForms_FormResponseFormFillerIdFormIdCompoundUniqueInput;
}
