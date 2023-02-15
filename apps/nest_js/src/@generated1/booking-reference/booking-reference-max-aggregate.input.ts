import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class BookingReferenceMaxAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    type?: true;

    @Field(() => Boolean, {nullable:true})
    uid?: true;

    @Field(() => Boolean, {nullable:true})
    meetingId?: true;

    @Field(() => Boolean, {nullable:true})
    meetingPassword?: true;

    @Field(() => Boolean, {nullable:true})
    meetingUrl?: true;

    @Field(() => Boolean, {nullable:true})
    bookingId?: true;

    @Field(() => Boolean, {nullable:true})
    externalCalendarId?: true;

    @Field(() => Boolean, {nullable:true})
    deleted?: true;

    @Field(() => Boolean, {nullable:true})
    credentialId?: true;
}
