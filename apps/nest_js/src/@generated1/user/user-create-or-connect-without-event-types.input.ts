import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutEventTypesInput } from './user-create-without-event-types.input';

@InputType()
export class UserCreateOrConnectWithoutEventTypesInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: UserWhereUniqueInput;

    @Field(() => UserCreateWithoutEventTypesInput, {nullable:false})
    @Type(() => UserCreateWithoutEventTypesInput)
    create!: UserCreateWithoutEventTypesInput;
}
