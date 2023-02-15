import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class UserSumAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    startTime?: true;

    @Field(() => Boolean, {nullable:true})
    endTime?: true;

    @Field(() => Boolean, {nullable:true})
    bufferTime?: true;

    @Field(() => Boolean, {nullable:true})
    defaultScheduleId?: true;

    @Field(() => Boolean, {nullable:true})
    timeFormat?: true;

    @Field(() => Boolean, {nullable:true})
    invitedTo?: true;
}
