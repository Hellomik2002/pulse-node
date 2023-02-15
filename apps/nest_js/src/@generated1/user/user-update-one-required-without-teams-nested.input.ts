import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutTeamsInput } from './user-create-without-teams.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutTeamsInput } from './user-create-or-connect-without-teams.input';
import { UserUpsertWithoutTeamsInput } from './user-upsert-without-teams.input';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithoutTeamsInput } from './user-update-without-teams.input';

@InputType()
export class UserUpdateOneRequiredWithoutTeamsNestedInput {

    @Field(() => UserCreateWithoutTeamsInput, {nullable:true})
    @Type(() => UserCreateWithoutTeamsInput)
    create?: UserCreateWithoutTeamsInput;

    @Field(() => UserCreateOrConnectWithoutTeamsInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutTeamsInput)
    connectOrCreate?: UserCreateOrConnectWithoutTeamsInput;

    @Field(() => UserUpsertWithoutTeamsInput, {nullable:true})
    @Type(() => UserUpsertWithoutTeamsInput)
    upsert?: UserUpsertWithoutTeamsInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: UserWhereUniqueInput;

    @Field(() => UserUpdateWithoutTeamsInput, {nullable:true})
    @Type(() => UserUpdateWithoutTeamsInput)
    update?: UserUpdateWithoutTeamsInput;
}
