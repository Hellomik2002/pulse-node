import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutBookingsInput } from './user-create-without-bookings.input';

@InputType()
export class UserCreateOrConnectWithoutBookingsInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: UserWhereUniqueInput;

    @Field(() => UserCreateWithoutBookingsInput, {nullable:false})
    @Type(() => UserCreateWithoutBookingsInput)
    create!: UserCreateWithoutBookingsInput;
}
