import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutApiKeysInput } from './user-create-without-api-keys.input';

@InputType()
export class UserCreateOrConnectWithoutApiKeysInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: UserWhereUniqueInput;

    @Field(() => UserCreateWithoutApiKeysInput, {nullable:false})
    @Type(() => UserCreateWithoutApiKeysInput)
    create!: UserCreateWithoutApiKeysInput;
}
