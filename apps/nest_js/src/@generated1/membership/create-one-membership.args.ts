import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MembershipCreateInput } from './membership-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneMembershipArgs {

    @Field(() => MembershipCreateInput, {nullable:false})
    @Type(() => MembershipCreateInput)
    data!: MembershipCreateInput;
}
