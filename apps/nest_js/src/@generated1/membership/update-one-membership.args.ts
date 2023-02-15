import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MembershipUpdateInput } from './membership-update.input';
import { Type } from 'class-transformer';
import { MembershipWhereUniqueInput } from './membership-where-unique.input';

@ArgsType()
export class UpdateOneMembershipArgs {

    @Field(() => MembershipUpdateInput, {nullable:false})
    @Type(() => MembershipUpdateInput)
    data!: MembershipUpdateInput;

    @Field(() => MembershipWhereUniqueInput, {nullable:false})
    @Type(() => MembershipWhereUniqueInput)
    where!: MembershipWhereUniqueInput;
}
