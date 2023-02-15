import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventTypeCreateWithoutHashedLinkInput } from './event-type-create-without-hashed-link.input';
import { Type } from 'class-transformer';
import { EventTypeCreateOrConnectWithoutHashedLinkInput } from './event-type-create-or-connect-without-hashed-link.input';
import { EventTypeUpsertWithoutHashedLinkInput } from './event-type-upsert-without-hashed-link.input';
import { EventTypeWhereUniqueInput } from './event-type-where-unique.input';
import { EventTypeUpdateWithoutHashedLinkInput } from './event-type-update-without-hashed-link.input';

@InputType()
export class EventTypeUpdateOneRequiredWithoutHashedLinkNestedInput {

    @Field(() => EventTypeCreateWithoutHashedLinkInput, {nullable:true})
    @Type(() => EventTypeCreateWithoutHashedLinkInput)
    create?: EventTypeCreateWithoutHashedLinkInput;

    @Field(() => EventTypeCreateOrConnectWithoutHashedLinkInput, {nullable:true})
    @Type(() => EventTypeCreateOrConnectWithoutHashedLinkInput)
    connectOrCreate?: EventTypeCreateOrConnectWithoutHashedLinkInput;

    @Field(() => EventTypeUpsertWithoutHashedLinkInput, {nullable:true})
    @Type(() => EventTypeUpsertWithoutHashedLinkInput)
    upsert?: EventTypeUpsertWithoutHashedLinkInput;

    @Field(() => EventTypeWhereUniqueInput, {nullable:true})
    @Type(() => EventTypeWhereUniqueInput)
    connect?: EventTypeWhereUniqueInput;

    @Field(() => EventTypeUpdateWithoutHashedLinkInput, {nullable:true})
    @Type(() => EventTypeUpdateWithoutHashedLinkInput)
    update?: EventTypeUpdateWithoutHashedLinkInput;
}
