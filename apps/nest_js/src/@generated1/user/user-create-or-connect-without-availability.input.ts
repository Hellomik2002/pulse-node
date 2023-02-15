import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutAvailabilityInput } from './user-create-without-availability.input';

@InputType()
export class UserCreateOrConnectWithoutAvailabilityInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: UserWhereUniqueInput;

    @Field(() => UserCreateWithoutAvailabilityInput, {nullable:false})
    @Type(() => UserCreateWithoutAvailabilityInput)
    create!: UserCreateWithoutAvailabilityInput;
}
