import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TeamCreateWithoutMembersInput } from './team-create-without-members.input';
import { Type } from 'class-transformer';
import { TeamCreateOrConnectWithoutMembersInput } from './team-create-or-connect-without-members.input';
import { TeamUpsertWithoutMembersInput } from './team-upsert-without-members.input';
import { TeamWhereUniqueInput } from './team-where-unique.input';
import { TeamUpdateWithoutMembersInput } from './team-update-without-members.input';

@InputType()
export class TeamUpdateOneRequiredWithoutMembersNestedInput {

    @Field(() => TeamCreateWithoutMembersInput, {nullable:true})
    @Type(() => TeamCreateWithoutMembersInput)
    create?: TeamCreateWithoutMembersInput;

    @Field(() => TeamCreateOrConnectWithoutMembersInput, {nullable:true})
    @Type(() => TeamCreateOrConnectWithoutMembersInput)
    connectOrCreate?: TeamCreateOrConnectWithoutMembersInput;

    @Field(() => TeamUpsertWithoutMembersInput, {nullable:true})
    @Type(() => TeamUpsertWithoutMembersInput)
    upsert?: TeamUpsertWithoutMembersInput;

    @Field(() => TeamWhereUniqueInput, {nullable:true})
    @Type(() => TeamWhereUniqueInput)
    connect?: TeamWhereUniqueInput;

    @Field(() => TeamUpdateWithoutMembersInput, {nullable:true})
    @Type(() => TeamUpdateWithoutMembersInput)
    update?: TeamUpdateWithoutMembersInput;
}
