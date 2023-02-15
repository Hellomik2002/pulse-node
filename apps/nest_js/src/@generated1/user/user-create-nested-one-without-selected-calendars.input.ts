import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutSelectedCalendarsInput } from './user-create-without-selected-calendars.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutSelectedCalendarsInput } from './user-create-or-connect-without-selected-calendars.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutSelectedCalendarsInput {

    @Field(() => UserCreateWithoutSelectedCalendarsInput, {nullable:true})
    @Type(() => UserCreateWithoutSelectedCalendarsInput)
    create?: UserCreateWithoutSelectedCalendarsInput;

    @Field(() => UserCreateOrConnectWithoutSelectedCalendarsInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutSelectedCalendarsInput)
    connectOrCreate?: UserCreateOrConnectWithoutSelectedCalendarsInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: UserWhereUniqueInput;
}
