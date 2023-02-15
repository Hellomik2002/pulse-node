import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class BookingReferenceCreateManyInput {

    @Field(() => Int, {nullable:true})
    id?: number;

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

    @Field(() => Int, {nullable:true})
    bookingId?: number;

    @Field(() => String, {nullable:true})
    externalCalendarId?: string;

    @Field(() => Boolean, {nullable:true})
    deleted?: boolean;

    @Field(() => Int, {nullable:true})
    credentialId?: number;
}
