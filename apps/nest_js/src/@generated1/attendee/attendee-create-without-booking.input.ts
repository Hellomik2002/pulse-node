import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class AttendeeCreateWithoutBookingInput {

    @Field(() => String, {nullable:false})
    email!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    timeZone!: string;

    @Field(() => String, {nullable:true})
    pulseUserId?: string;

    @Field(() => String, {nullable:true})
    locale?: string;
}
