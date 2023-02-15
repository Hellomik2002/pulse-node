import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutSelectedCalendarsInput } from './user-create-without-selected-calendars.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutSelectedCalendarsInput } from './user-create-or-connect-without-selected-calendars.input';
import { UserUpsertWithoutSelectedCalendarsInput } from './user-upsert-without-selected-calendars.input';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithoutSelectedCalendarsInput } from './user-update-without-selected-calendars.input';

@InputType()
export class UserUpdateOneRequiredWithoutSelectedCalendarsNestedInput {

    @Field(() => UserCreateWithoutSelectedCalendarsInput, {nullable:true})
    @Type(() => UserCreateWithoutSelectedCalendarsInput)
    create?: UserCreateWithoutSelectedCalendarsInput;

    @Field(() => UserCreateOrConnectWithoutSelectedCalendarsInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutSelectedCalendarsInput)
    connectOrCreate?: UserCreateOrConnectWithoutSelectedCalendarsInput;

    @Field(() => UserUpsertWithoutSelectedCalendarsInput, {nullable:true})
    @Type(() => UserUpsertWithoutSelectedCalendarsInput)
    upsert?: UserUpsertWithoutSelectedCalendarsInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: UserWhereUniqueInput;

    @Field(() => UserUpdateWithoutSelectedCalendarsInput, {nullable:true})
    @Type(() => UserUpdateWithoutSelectedCalendarsInput)
    update?: UserUpdateWithoutSelectedCalendarsInput;
}
