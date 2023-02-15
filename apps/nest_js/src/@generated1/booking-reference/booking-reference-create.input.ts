import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BookingCreateNestedOneWithoutReferencesInput } from '../booking/booking-create-nested-one-without-references.input';
import { Int } from '@nestjs/graphql';

@InputType()
export class BookingReferenceCreateInput {

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

    @Field(() => BookingCreateNestedOneWithoutReferencesInput, {nullable:true})
    booking?: BookingCreateNestedOneWithoutReferencesInput;

    @Field(() => String, {nullable:true})
    externalCalendarId?: string;

    @Field(() => Boolean, {nullable:true})
    deleted?: boolean;

    @Field(() => Int, {nullable:true})
    credentialId?: number;
}
