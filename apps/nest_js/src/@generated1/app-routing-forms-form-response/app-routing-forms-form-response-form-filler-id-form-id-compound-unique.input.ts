import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class App_RoutingForms_FormResponseFormFillerIdFormIdCompoundUniqueInput {

    @Field(() => String, {nullable:false})
    formFillerId!: string;

    @Field(() => String, {nullable:false})
    formId!: string;
}
