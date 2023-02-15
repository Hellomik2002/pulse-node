import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutHostsInput } from '../user/user-create-nested-one-without-hosts.input';

@InputType()
export class HostCreateWithoutEventTypeInput {

    @Field(() => UserCreateNestedOneWithoutHostsInput, {nullable:false})
    user!: UserCreateNestedOneWithoutHostsInput;

    @Field(() => Boolean, {nullable:true})
    isFixed?: boolean;
}
