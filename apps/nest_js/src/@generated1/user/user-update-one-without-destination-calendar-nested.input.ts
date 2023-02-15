import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutDestinationCalendarInput } from './user-create-without-destination-calendar.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutDestinationCalendarInput } from './user-create-or-connect-without-destination-calendar.input';
import { UserUpsertWithoutDestinationCalendarInput } from './user-upsert-without-destination-calendar.input';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithoutDestinationCalendarInput } from './user-update-without-destination-calendar.input';

@InputType()
export class UserUpdateOneWithoutDestinationCalendarNestedInput {

    @Field(() => UserCreateWithoutDestinationCalendarInput, {nullable:true})
    @Type(() => UserCreateWithoutDestinationCalendarInput)
    create?: UserCreateWithoutDestinationCalendarInput;

    @Field(() => UserCreateOrConnectWithoutDestinationCalendarInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutDestinationCalendarInput)
    connectOrCreate?: UserCreateOrConnectWithoutDestinationCalendarInput;

    @Field(() => UserUpsertWithoutDestinationCalendarInput, {nullable:true})
    @Type(() => UserUpsertWithoutDestinationCalendarInput)
    upsert?: UserUpsertWithoutDestinationCalendarInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: UserWhereUniqueInput;

    @Field(() => UserUpdateWithoutDestinationCalendarInput, {nullable:true})
    @Type(() => UserUpdateWithoutDestinationCalendarInput)
    update?: UserUpdateWithoutDestinationCalendarInput;
}
