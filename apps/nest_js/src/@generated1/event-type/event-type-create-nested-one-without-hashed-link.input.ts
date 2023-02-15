import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventTypeCreateWithoutHashedLinkInput } from './event-type-create-without-hashed-link.input';
import { Type } from 'class-transformer';
import { EventTypeCreateOrConnectWithoutHashedLinkInput } from './event-type-create-or-connect-without-hashed-link.input';
import { EventTypeWhereUniqueInput } from './event-type-where-unique.input';

@InputType()
export class EventTypeCreateNestedOneWithoutHashedLinkInput {

    @Field(() => EventTypeCreateWithoutHashedLinkInput, {nullable:true})
    @Type(() => EventTypeCreateWithoutHashedLinkInput)
    create?: EventTypeCreateWithoutHashedLinkInput;

    @Field(() => EventTypeCreateOrConnectWithoutHashedLinkInput, {nullable:true})
    @Type(() => EventTypeCreateOrConnectWithoutHashedLinkInput)
    connectOrCreate?: EventTypeCreateOrConnectWithoutHashedLinkInput;

    @Field(() => EventTypeWhereUniqueInput, {nullable:true})
    @Type(() => EventTypeWhereUniqueInput)
    connect?: EventTypeWhereUniqueInput;
}
