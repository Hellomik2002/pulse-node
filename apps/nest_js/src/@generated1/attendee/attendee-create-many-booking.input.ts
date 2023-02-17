import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class AttendeeCreateManyBookingInput {

    @Field(() => Int, {nullable:true})
    id?: number;

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
