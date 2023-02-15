import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TeamUpdateWithoutMembersInput } from './team-update-without-members.input';
import { Type } from 'class-transformer';
import { TeamCreateWithoutMembersInput } from './team-create-without-members.input';

@InputType()
export class TeamUpsertWithoutMembersInput {

    @Field(() => TeamUpdateWithoutMembersInput, {nullable:false})
    @Type(() => TeamUpdateWithoutMembersInput)
    update!: TeamUpdateWithoutMembersInput;

    @Field(() => TeamCreateWithoutMembersInput, {nullable:false})
    @Type(() => TeamCreateWithoutMembersInput)
    create!: TeamCreateWithoutMembersInput;
}
