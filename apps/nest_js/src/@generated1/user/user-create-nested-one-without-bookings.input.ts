import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutBookingsInput } from './user-create-without-bookings.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutBookingsInput } from './user-create-or-connect-without-bookings.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutBookingsInput {

    @Field(() => UserCreateWithoutBookingsInput, {nullable:true})
    @Type(() => UserCreateWithoutBookingsInput)
    create?: UserCreateWithoutBookingsInput;

    @Field(() => UserCreateOrConnectWithoutBookingsInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutBookingsInput)
    connectOrCreate?: UserCreateOrConnectWithoutBookingsInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: UserWhereUniqueInput;
}
