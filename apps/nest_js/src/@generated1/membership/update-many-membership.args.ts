import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MembershipUpdateManyMutationInput } from './membership-update-many-mutation.input';
import { Type } from 'class-transformer';
import { MembershipWhereInput } from './membership-where.input';

@ArgsType()
export class UpdateManyMembershipArgs {

    @Field(() => MembershipUpdateManyMutationInput, {nullable:false})
    @Type(() => MembershipUpdateManyMutationInput)
    data!: MembershipUpdateManyMutationInput;

    @Field(() => MembershipWhereInput, {nullable:true})
    @Type(() => MembershipWhereInput)
    where?: MembershipWhereInput;
}
