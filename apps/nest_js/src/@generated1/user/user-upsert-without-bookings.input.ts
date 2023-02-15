import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutBookingsInput } from './user-update-without-bookings.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutBookingsInput } from './user-create-without-bookings.input';

@InputType()
export class UserUpsertWithoutBookingsInput {

    @Field(() => UserUpdateWithoutBookingsInput, {nullable:false})
    @Type(() => UserUpdateWithoutBookingsInput)
    update!: UserUpdateWithoutBookingsInput;

    @Field(() => UserCreateWithoutBookingsInput, {nullable:false})
    @Type(() => UserCreateWithoutBookingsInput)
    create!: UserCreateWithoutBookingsInput;
}
