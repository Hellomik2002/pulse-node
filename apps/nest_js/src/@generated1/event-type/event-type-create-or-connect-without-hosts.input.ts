import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventTypeWhereUniqueInput } from './event-type-where-unique.input';
import { Type } from 'class-transformer';
import { EventTypeCreateWithoutHostsInput } from './event-type-create-without-hosts.input';

@InputType()
export class EventTypeCreateOrConnectWithoutHostsInput {

    @Field(() => EventTypeWhereUniqueInput, {nullable:false})
    @Type(() => EventTypeWhereUniqueInput)
    where!: EventTypeWhereUniqueInput;

    @Field(() => EventTypeCreateWithoutHostsInput, {nullable:false})
    @Type(() => EventTypeCreateWithoutHostsInput)
    create!: EventTypeCreateWithoutHostsInput;
}
