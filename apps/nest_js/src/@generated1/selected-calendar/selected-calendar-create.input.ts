import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutSelectedCalendarsInput } from '../user/user-create-nested-one-without-selected-calendars.input';

@InputType()
export class SelectedCalendarCreateInput {

    @Field(() => UserCreateNestedOneWithoutSelectedCalendarsInput, {nullable:false})
    user!: UserCreateNestedOneWithoutSelectedCalendarsInput;

    @Field(() => String, {nullable:false})
    integration!: string;

    @Field(() => String, {nullable:false})
    externalId!: string;
}
