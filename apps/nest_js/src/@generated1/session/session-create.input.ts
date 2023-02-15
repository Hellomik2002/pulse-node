import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutSessionsInput } from '../user/user-create-nested-one-without-sessions.input';

@InputType()
export class SessionCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    sessionToken!: string;

    @Field(() => Date, {nullable:false})
    expires!: Date | string;

    @Field(() => UserCreateNestedOneWithoutSessionsInput, {nullable:true})
    user?: UserCreateNestedOneWithoutSessionsInput;
}
