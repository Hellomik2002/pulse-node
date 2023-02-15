import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class BookingReferenceCreateWithoutBookingInput {

    @Field(() => String, {nullable:false})
    type!: string;

    @Field(() => String, {nullable:false})
    uid!: string;

    @Field(() => String, {nullable:true})
    meetingId?: string;

    @Field(() => String, {nullable:true})
    meetingPassword?: string;

    @Field(() => String, {nullable:true})
    meetingUrl?: string;

    @Field(() => String, {nullable:true})
    externalCalendarId?: string;

    @Field(() => Boolean, {nullable:true})
    deleted?: boolean;

    @Field(() => Int, {nullable:true})
    credentialId?: number;
}
