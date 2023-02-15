import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutDestinationCalendarInput } from './user-create-without-destination-calendar.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutDestinationCalendarInput } from './user-create-or-connect-without-destination-calendar.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutDestinationCalendarInput {

    @Field(() => UserCreateWithoutDestinationCalendarInput, {nullable:true})
    @Type(() => UserCreateWithoutDestinationCalendarInput)
    create?: UserCreateWithoutDestinationCalendarInput;

    @Field(() => UserCreateOrConnectWithoutDestinationCalendarInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutDestinationCalendarInput)
    connectOrCreate?: UserCreateOrConnectWithoutDestinationCalendarInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: UserWhereUniqueInput;
}
