import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventTypeCreateWithoutHostsInput } from './event-type-create-without-hosts.input';
import { Type } from 'class-transformer';
import { EventTypeCreateOrConnectWithoutHostsInput } from './event-type-create-or-connect-without-hosts.input';
import { EventTypeWhereUniqueInput } from './event-type-where-unique.input';

@InputType()
export class EventTypeCreateNestedOneWithoutHostsInput {

    @Field(() => EventTypeCreateWithoutHostsInput, {nullable:true})
    @Type(() => EventTypeCreateWithoutHostsInput)
    create?: EventTypeCreateWithoutHostsInput;

    @Field(() => EventTypeCreateOrConnectWithoutHostsInput, {nullable:true})
    @Type(() => EventTypeCreateOrConnectWithoutHostsInput)
    connectOrCreate?: EventTypeCreateOrConnectWithoutHostsInput;

    @Field(() => EventTypeWhereUniqueInput, {nullable:true})
    @Type(() => EventTypeWhereUniqueInput)
    connect?: EventTypeWhereUniqueInput;
}
