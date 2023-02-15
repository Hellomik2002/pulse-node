import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MembershipCreateManyUserInput } from './membership-create-many-user.input';
import { Type } from 'class-transformer';

@InputType()
export class MembershipCreateManyUserInputEnvelope {

    @Field(() => [MembershipCreateManyUserInput], {nullable:false})
    @Type(() => MembershipCreateManyUserInput)
    data!: Array<MembershipCreateManyUserInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
