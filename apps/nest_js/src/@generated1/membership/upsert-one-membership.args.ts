import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MembershipWhereUniqueInput } from './membership-where-unique.input';
import { Type } from 'class-transformer';
import { MembershipCreateInput } from './membership-create.input';
import { MembershipUpdateInput } from './membership-update.input';

@ArgsType()
export class UpsertOneMembershipArgs {

    @Field(() => MembershipWhereUniqueInput, {nullable:false})
    @Type(() => MembershipWhereUniqueInput)
    where!: MembershipWhereUniqueInput;

    @Field(() => MembershipCreateInput, {nullable:false})
    @Type(() => MembershipCreateInput)
    create!: MembershipCreateInput;

    @Field(() => MembershipUpdateInput, {nullable:false})
    @Type(() => MembershipUpdateInput)
    update!: MembershipUpdateInput;
}
