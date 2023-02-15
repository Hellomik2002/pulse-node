import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutAvailabilityInput } from './user-update-without-availability.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutAvailabilityInput } from './user-create-without-availability.input';

@InputType()
export class UserUpsertWithoutAvailabilityInput {

    @Field(() => UserUpdateWithoutAvailabilityInput, {nullable:false})
    @Type(() => UserUpdateWithoutAvailabilityInput)
    update!: UserUpdateWithoutAvailabilityInput;

    @Field(() => UserCreateWithoutAvailabilityInput, {nullable:false})
    @Type(() => UserCreateWithoutAvailabilityInput)
    create!: UserCreateWithoutAvailabilityInput;
}
