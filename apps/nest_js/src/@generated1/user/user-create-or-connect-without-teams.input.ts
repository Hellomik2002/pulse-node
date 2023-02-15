import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutTeamsInput } from './user-create-without-teams.input';

@InputType()
export class UserCreateOrConnectWithoutTeamsInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: UserWhereUniqueInput;

    @Field(() => UserCreateWithoutTeamsInput, {nullable:false})
    @Type(() => UserCreateWithoutTeamsInput)
    create!: UserCreateWithoutTeamsInput;
}
