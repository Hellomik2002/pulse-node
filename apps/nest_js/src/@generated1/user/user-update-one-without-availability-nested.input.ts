import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutAvailabilityInput } from './user-create-without-availability.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutAvailabilityInput } from './user-create-or-connect-without-availability.input';
import { UserUpsertWithoutAvailabilityInput } from './user-upsert-without-availability.input';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithoutAvailabilityInput } from './user-update-without-availability.input';

@InputType()
export class UserUpdateOneWithoutAvailabilityNestedInput {

    @Field(() => UserCreateWithoutAvailabilityInput, {nullable:true})
    @Type(() => UserCreateWithoutAvailabilityInput)
    create?: UserCreateWithoutAvailabilityInput;

    @Field(() => UserCreateOrConnectWithoutAvailabilityInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutAvailabilityInput)
    connectOrCreate?: UserCreateOrConnectWithoutAvailabilityInput;

    @Field(() => UserUpsertWithoutAvailabilityInput, {nullable:true})
    @Type(() => UserUpsertWithoutAvailabilityInput)
    upsert?: UserUpsertWithoutAvailabilityInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: UserWhereUniqueInput;

    @Field(() => UserUpdateWithoutAvailabilityInput, {nullable:true})
    @Type(() => UserUpdateWithoutAvailabilityInput)
    update?: UserUpdateWithoutAvailabilityInput;
}
