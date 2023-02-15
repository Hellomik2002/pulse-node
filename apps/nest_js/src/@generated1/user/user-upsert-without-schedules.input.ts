import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutSchedulesInput } from './user-update-without-schedules.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutSchedulesInput } from './user-create-without-schedules.input';

@InputType()
export class UserUpsertWithoutSchedulesInput {

    @Field(() => UserUpdateWithoutSchedulesInput, {nullable:false})
    @Type(() => UserUpdateWithoutSchedulesInput)
    update!: UserUpdateWithoutSchedulesInput;

    @Field(() => UserCreateWithoutSchedulesInput, {nullable:false})
    @Type(() => UserCreateWithoutSchedulesInput)
    create!: UserCreateWithoutSchedulesInput;
}
