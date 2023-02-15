import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutSelectedCalendarsInput } from './user-create-without-selected-calendars.input';

@InputType()
export class UserCreateOrConnectWithoutSelectedCalendarsInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: UserWhereUniqueInput;

    @Field(() => UserCreateWithoutSelectedCalendarsInput, {nullable:false})
    @Type(() => UserCreateWithoutSelectedCalendarsInput)
    create!: UserCreateWithoutSelectedCalendarsInput;
}
