import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutHostsInput } from '../user/user-create-nested-one-without-hosts.input';
import { EventTypeCreateNestedOneWithoutHostsInput } from '../event-type/event-type-create-nested-one-without-hosts.input';

@InputType()
export class HostCreateInput {

    @Field(() => UserCreateNestedOneWithoutHostsInput, {nullable:false})
    user!: UserCreateNestedOneWithoutHostsInput;

    @Field(() => EventTypeCreateNestedOneWithoutHostsInput, {nullable:false})
    eventType!: EventTypeCreateNestedOneWithoutHostsInput;

    @Field(() => Boolean, {nullable:true})
    isFixed?: boolean;
}
