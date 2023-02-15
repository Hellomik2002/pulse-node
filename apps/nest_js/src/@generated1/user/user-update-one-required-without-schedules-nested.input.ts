import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutSchedulesInput } from './user-create-without-schedules.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutSchedulesInput } from './user-create-or-connect-without-schedules.input';
import { UserUpsertWithoutSchedulesInput } from './user-upsert-without-schedules.input';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithoutSchedulesInput } from './user-update-without-schedules.input';

@InputType()
export class UserUpdateOneRequiredWithoutSchedulesNestedInput {

    @Field(() => UserCreateWithoutSchedulesInput, {nullable:true})
    @Type(() => UserCreateWithoutSchedulesInput)
    create?: UserCreateWithoutSchedulesInput;

    @Field(() => UserCreateOrConnectWithoutSchedulesInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutSchedulesInput)
    connectOrCreate?: UserCreateOrConnectWithoutSchedulesInput;

    @Field(() => UserUpsertWithoutSchedulesInput, {nullable:true})
    @Type(() => UserUpsertWithoutSchedulesInput)
    upsert?: UserUpsertWithoutSchedulesInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: UserWhereUniqueInput;

    @Field(() => UserUpdateWithoutSchedulesInput, {nullable:true})
    @Type(() => UserUpdateWithoutSchedulesInput)
    update?: UserUpdateWithoutSchedulesInput;
}
