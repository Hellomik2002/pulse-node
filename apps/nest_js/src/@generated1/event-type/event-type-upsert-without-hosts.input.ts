import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventTypeUpdateWithoutHostsInput } from './event-type-update-without-hosts.input';
import { Type } from 'class-transformer';
import { EventTypeCreateWithoutHostsInput } from './event-type-create-without-hosts.input';

@InputType()
export class EventTypeUpsertWithoutHostsInput {

    @Field(() => EventTypeUpdateWithoutHostsInput, {nullable:false})
    @Type(() => EventTypeUpdateWithoutHostsInput)
    update!: EventTypeUpdateWithoutHostsInput;

    @Field(() => EventTypeCreateWithoutHostsInput, {nullable:false})
    @Type(() => EventTypeCreateWithoutHostsInput)
    create!: EventTypeCreateWithoutHostsInput;
}
