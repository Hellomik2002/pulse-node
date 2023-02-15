import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PaymentCreateManyBookingInput } from './payment-create-many-booking.input';
import { Type } from 'class-transformer';

@InputType()
export class PaymentCreateManyBookingInputEnvelope {

    @Field(() => [PaymentCreateManyBookingInput], {nullable:false})
    @Type(() => PaymentCreateManyBookingInput)
    data!: Array<PaymentCreateManyBookingInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
