import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventTypeCreateWithoutHostsInput } from './event-type-create-without-hosts.input';
import { Type } from 'class-transformer';
import { EventTypeCreateOrConnectWithoutHostsInput } from './event-type-create-or-connect-without-hosts.input';
import { EventTypeUpsertWithoutHostsInput } from './event-type-upsert-without-hosts.input';
import { EventTypeWhereUniqueInput } from './event-type-where-unique.input';
import { EventTypeUpdateWithoutHostsInput } from './event-type-update-without-hosts.input';

@InputType()
export class EventTypeUpdateOneRequiredWithoutHostsNestedInput {

    @Field(() => EventTypeCreateWithoutHostsInput, {nullable:true})
    @Type(() => EventTypeCreateWithoutHostsInput)
    create?: EventTypeCreateWithoutHostsInput;

    @Field(() => EventTypeCreateOrConnectWithoutHostsInput, {nullable:true})
    @Type(() => EventTypeCreateOrConnectWithoutHostsInput)
    connectOrCreate?: EventTypeCreateOrConnectWithoutHostsInput;

    @Field(() => EventTypeUpsertWithoutHostsInput, {nullable:true})
    @Type(() => EventTypeUpsertWithoutHostsInput)
    upsert?: EventTypeUpsertWithoutHostsInput;

    @Field(() => EventTypeWhereUniqueInput, {nullable:true})
    @Type(() => EventTypeWhereUniqueInput)
    connect?: EventTypeWhereUniqueInput;

    @Field(() => EventTypeUpdateWithoutHostsInput, {nullable:true})
    @Type(() => EventTypeUpdateWithoutHostsInput)
    update?: EventTypeUpdateWithoutHostsInput;
}
