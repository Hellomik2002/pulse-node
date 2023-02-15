import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutTeamsInput } from './user-create-without-teams.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutTeamsInput } from './user-create-or-connect-without-teams.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutTeamsInput {

    @Field(() => UserCreateWithoutTeamsInput, {nullable:true})
    @Type(() => UserCreateWithoutTeamsInput)
    create?: UserCreateWithoutTeamsInput;

    @Field(() => UserCreateOrConnectWithoutTeamsInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutTeamsInput)
    connectOrCreate?: UserCreateOrConnectWithoutTeamsInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: UserWhereUniqueInput;
}
