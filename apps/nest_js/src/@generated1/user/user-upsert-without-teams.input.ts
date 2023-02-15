import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutTeamsInput } from './user-update-without-teams.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutTeamsInput } from './user-create-without-teams.input';

@InputType()
export class UserUpsertWithoutTeamsInput {

    @Field(() => UserUpdateWithoutTeamsInput, {nullable:false})
    @Type(() => UserUpdateWithoutTeamsInput)
    update!: UserUpdateWithoutTeamsInput;

    @Field(() => UserCreateWithoutTeamsInput, {nullable:false})
    @Type(() => UserCreateWithoutTeamsInput)
    create!: UserCreateWithoutTeamsInput;
}
