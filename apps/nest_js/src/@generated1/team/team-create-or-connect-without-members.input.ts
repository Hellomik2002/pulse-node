import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TeamWhereUniqueInput } from './team-where-unique.input';
import { Type } from 'class-transformer';
import { TeamCreateWithoutMembersInput } from './team-create-without-members.input';

@InputType()
export class TeamCreateOrConnectWithoutMembersInput {

    @Field(() => TeamWhereUniqueInput, {nullable:false})
    @Type(() => TeamWhereUniqueInput)
    where!: TeamWhereUniqueInput;

    @Field(() => TeamCreateWithoutMembersInput, {nullable:false})
    @Type(() => TeamCreateWithoutMembersInput)
    create!: TeamCreateWithoutMembersInput;
}
