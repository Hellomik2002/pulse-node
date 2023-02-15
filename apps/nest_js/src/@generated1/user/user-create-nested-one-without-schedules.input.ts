import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutSchedulesInput } from './user-create-without-schedules.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutSchedulesInput } from './user-create-or-connect-without-schedules.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutSchedulesInput {

    @Field(() => UserCreateWithoutSchedulesInput, {nullable:true})
    @Type(() => UserCreateWithoutSchedulesInput)
    create?: UserCreateWithoutSchedulesInput;

    @Field(() => UserCreateOrConnectWithoutSchedulesInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutSchedulesInput)
    connectOrCreate?: UserCreateOrConnectWithoutSchedulesInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: UserWhereUniqueInput;
}
