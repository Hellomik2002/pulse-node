import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutCredentialsInput } from './user-create-without-credentials.input';

@InputType()
export class UserCreateOrConnectWithoutCredentialsInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: UserWhereUniqueInput;

    @Field(() => UserCreateWithoutCredentialsInput, {nullable:false})
    @Type(() => UserCreateWithoutCredentialsInput)
    create!: UserCreateWithoutCredentialsInput;
}
