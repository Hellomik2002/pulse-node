import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventTypeCreateNestedOneWithoutHostsInput } from '../event-type/event-type-create-nested-one-without-hosts.input';

@InputType()
export class HostCreateWithoutUserInput {

    @Field(() => EventTypeCreateNestedOneWithoutHostsInput, {nullable:false})
    eventType!: EventTypeCreateNestedOneWithoutHostsInput;

    @Field(() => Boolean, {nullable:true})
    isFixed?: boolean;
}
