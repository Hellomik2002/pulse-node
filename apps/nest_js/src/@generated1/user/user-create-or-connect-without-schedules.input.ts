import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutSchedulesInput } from './user-create-without-schedules.input';

@InputType()
export class UserCreateOrConnectWithoutSchedulesInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: UserWhereUniqueInput;

    @Field(() => UserCreateWithoutSchedulesInput, {nullable:false})
    @Type(() => UserCreateWithoutSchedulesInput)
    create!: UserCreateWithoutSchedulesInput;
}
