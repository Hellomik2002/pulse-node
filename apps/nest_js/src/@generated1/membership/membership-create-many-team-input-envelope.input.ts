import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MembershipCreateManyTeamInput } from './membership-create-many-team.input';
import { Type } from 'class-transformer';

@InputType()
export class MembershipCreateManyTeamInputEnvelope {

    @Field(() => [MembershipCreateManyTeamInput], {nullable:false})
    @Type(() => MembershipCreateManyTeamInput)
    data!: Array<MembershipCreateManyTeamInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
