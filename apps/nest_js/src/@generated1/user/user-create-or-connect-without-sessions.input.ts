import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutSessionsInput } from './user-create-without-sessions.input';

@InputType()
export class UserCreateOrConnectWithoutSessionsInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: UserWhereUniqueInput;

    @Field(() => UserCreateWithoutSessionsInput, {nullable:false})
    @Type(() => UserCreateWithoutSessionsInput)
    create!: UserCreateWithoutSessionsInput;
}
