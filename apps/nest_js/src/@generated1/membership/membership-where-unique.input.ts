import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MembershipUserIdTeamIdCompoundUniqueInput } from './membership-user-id-team-id-compound-unique.input';

@InputType()
export class MembershipWhereUniqueInput {

    @Field(() => MembershipUserIdTeamIdCompoundUniqueInput, {nullable:true})
    userId_teamId?: MembershipUserIdTeamIdCompoundUniqueInput;
}
