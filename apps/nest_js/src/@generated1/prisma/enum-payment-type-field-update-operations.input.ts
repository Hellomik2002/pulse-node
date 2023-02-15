import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PaymentType } from './payment-type.enum';

@InputType()
export class EnumPaymentTypeFieldUpdateOperationsInput {

    @Field(() => PaymentType, {nullable:true})
    set?: keyof typeof PaymentType;
}
