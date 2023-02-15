import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventTypeWhereUniqueInput } from './event-type-where-unique.input';
import { Type } from 'class-transformer';
import { EventTypeUpdateWithoutUsersInput } from './event-type-update-without-users.input';
import { EventTypeCreateWithoutUsersInput } from './event-type-create-without-users.input';

@InputType()
export class EventTypeUpsertWithWhereUniqueWithoutUsersInput {

    @Field(() => EventTypeWhereUniqueInput, {nullable:false})
    @Type(() => EventTypeWhereUniqueInput)
    where!: EventTypeWhereUniqueInput;

    @Field(() => EventTypeUpdateWithoutUsersInput, {nullable:false})
    @Type(() => EventTypeUpdateWithoutUsersInput)
    update!: EventTypeUpdateWithoutUsersInput;

    @Field(() => EventTypeCreateWithoutUsersInput, {nullable:false})
    @Type(() => EventTypeCreateWithoutUsersInput)
    create!: EventTypeCreateWithoutUsersInput;
}
