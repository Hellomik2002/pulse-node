import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TeamCreateWithoutMembersInput } from './team-create-without-members.input';
import { Type } from 'class-transformer';
import { TeamCreateOrConnectWithoutMembersInput } from './team-create-or-connect-without-members.input';
import { TeamWhereUniqueInput } from './team-where-unique.input';

@InputType()
export class TeamCreateNestedOneWithoutMembersInput {

    @Field(() => TeamCreateWithoutMembersInput, {nullable:true})
    @Type(() => TeamCreateWithoutMembersInput)
    create?: TeamCreateWithoutMembersInput;

    @Field(() => TeamCreateOrConnectWithoutMembersInput, {nullable:true})
    @Type(() => TeamCreateOrConnectWithoutMembersInput)
    connectOrCreate?: TeamCreateOrConnectWithoutMembersInput;

    @Field(() => TeamWhereUniqueInput, {nullable:true})
    @Type(() => TeamWhereUniqueInput)
    connect?: TeamWhereUniqueInput;
}
