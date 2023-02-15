import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutBookingsInput } from './user-create-without-bookings.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutBookingsInput } from './user-create-or-connect-without-bookings.input';
import { UserUpsertWithoutBookingsInput } from './user-upsert-without-bookings.input';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithoutBookingsInput } from './user-update-without-bookings.input';

@InputType()
export class UserUpdateOneWithoutBookingsNestedInput {

    @Field(() => UserCreateWithoutBookingsInput, {nullable:true})
    @Type(() => UserCreateWithoutBookingsInput)
    create?: UserCreateWithoutBookingsInput;

    @Field(() => UserCreateOrConnectWithoutBookingsInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutBookingsInput)
    connectOrCreate?: UserCreateOrConnectWithoutBookingsInput;

    @Field(() => UserUpsertWithoutBookingsInput, {nullable:true})
    @Type(() => UserUpsertWithoutBookingsInput)
    upsert?: UserUpsertWithoutBookingsInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: UserWhereUniqueInput;

    @Field(() => UserUpdateWithoutBookingsInput, {nullable:true})
    @Type(() => UserUpdateWithoutBookingsInput)
    update?: UserUpdateWithoutBookingsInput;
}
